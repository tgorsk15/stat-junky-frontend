import { useState } from "react"
import { useQuery, useQueryClient } from "@tanstack/react-query"

import { getEnvVariable } from "../../utils/apiSetter"
import { getTeams } from "../../utils/dataFetches"
import nbaStyles from "./nbaPage.module.css"
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
        <div className={nbaStyles.mainNbaContainer}>
            <section className={`${nbaStyles.playerSearchSection}`}>
                <PlayerSearch 

                />
                {player1Stats && (
                    <PlayerSearch 
                        isPlayer2={true}
                    />
                )}
            </section>
            <div className={nbaStyles.createBtnContainer}>
                <button 
                    className={nbaStyles.createCompBtn}
                    onClick={() => 'clicked'}
                >
                    Compare Players
                </button>
            </div>
            

            {/* once comparison is created, it should scroll user down to the table */}
            <section className={nbaStyles.playerCardSection}>
                <PlayerCard 

                />

                <PlayerCard 
                    isPlayer2={true}
                />
            </section>

            {/* could put comparison seciton here */}


        </div>
    )
}