import { useState } from "react"
import { useQuery, useQueryClient } from "@tanstack/react-query"

import { getEnvVariable } from "../../utils/apiSetter"
import { getTeams } from "../../utils/dataFetches"
import nbaPage from "./nbaPage.module.css"

import { PlayerSearch } from "../../Components/PlayerSearch/PlayerSearch"
import { PlayerCard } from "../../Components/PlayerCard/PlayerCard"


export const NbaPage = () => {
    const [teamData, changeData] = useState(true) 
    const [isLoading, setLoading] = useState(false)

    // set up state for activePlayer1
    const [player1, setPlayer1] = useState(null)
    // POSSIBLY create a context for the player states... tedious to pass down

    // ** Maybe pre-load all player data instead:
    const queryClient = useQueryClient()
    const {data: teamsData, isPending, error, refetch} = useQuery({
        queryFn: getTeams,
        queryKey: ['allTeams'],
        enabled: false,
        initialData: null,
        initialDataUpdatedAt: Date.now(),
        
    })

    async function handleLoadTest() {
        setLoading(true)
        await refetch()
        setLoading(false)
    }


    return (
        <div>
            <h1>here is the nbaPage</h1>
            <section className={`${nbaPage.playerSearchSection}`}>
                <PlayerSearch 
                    setPlayer1={setPlayer1}
                />
            </section>
            <section className={nbaPage.playerCardSection}>
                <PlayerCard 
                    player1={player1}
                />
            </section>

            <button
                onClick={handleLoadTest}
            >
                Get teams
            </button>

            {isLoading && (
                <div>Its Loading ...</div>
            )}

            {teamsData && (
                <h2>teams is loaded</h2>
            )}

            {error && (
                <div>An error occurred: {error.message}</div>
            )}

        </div>
    )
}