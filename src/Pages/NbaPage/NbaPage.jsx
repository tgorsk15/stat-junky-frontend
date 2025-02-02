import { useState } from "react"
import { useQuery, useQueryClient } from "@tanstack/react-query"

import { getEnvVariable } from "../../utils/apiSetter"
import { getTeams } from "../../utils/dataFetches"
import nbaPage from "./nbaPage.module.css"
import { usePlayer } from "../../utils/usePlayer"

import { PlayerSearch } from "../../Components/PlayerSearch/PlayerSearch"
import { PlayerCard } from "../../Components/PlayerCard/PlayerCard"


export const NbaPage = () => {
    const { setLoading, player1Stats } = usePlayer()


    // ** Maybe pre-load all player data instead:
    const {data: teamsData, isPending, error, refetch} = useQuery({
        queryFn: getTeams,
        queryKey: ['allTeams'],
        enabled: false,
        initialData: null,
        initialDataUpdatedAt: Date.now(),
        
    })


    return (
        <div>
            <section className={`${nbaPage.playerSearchSection}`}>
                <PlayerSearch 

                />
                {player1Stats && (
                    <PlayerSearch 
                        isPlayer2={true}
                    />
                )}
            </section>
            <section className={nbaPage.playerCardSection}>
                <PlayerCard 

                />

                <PlayerCard 
                    isPlayer2={true}
                />
            </section>


        </div>
    )
}