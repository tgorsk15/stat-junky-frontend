import { useState } from "react"
import { useQuery, useQueryClient } from "@tanstack/react-query"

import { getEnvVariable } from "../../utils/apiSetter"
import { getTeams } from "../../utils/dataFetches"
import nbaPage from "./nbaPage.module.css"
import { usePlayer } from "../../utils/usePlayer"

import { PlayerSearch } from "../../Components/PlayerSearch/PlayerSearch"
import { PlayerCard } from "../../Components/PlayerCard/PlayerCard"


export const NbaPage = () => {
    const { setLoading } = usePlayer()
    // const [teamData, changeData] = useState(true) 
    // const [isLoading, setLoading] = useState(false)

    // set up state for activePlayer1
    // const [player1Stats, setPlayer1Stats] = useState(null)
    // const [player1Load, setPlayer1Load] = useState(false)


    // ** Maybe pre-load all player data instead:
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
            <section className={`${nbaPage.playerSearchSection}`}>
                <PlayerSearch 
                    // setPlayer1Stats={setPlayer1Stats}
                    // setPlayer1Load={setPlayer1Load}
                />
            </section>
            <section className={nbaPage.playerCardSection}>
                <PlayerCard 
                    // playerStats={player1Stats}
                    // playerLoad={player1Load}
                />
                {/* set up 2nd player card here */}
            </section>






            {/* <button
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
            )} */}

        </div>
    )
}