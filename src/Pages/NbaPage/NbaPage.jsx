import { useState, useRef, useEffect } from "react"
import { useQuery, useQueryClient } from "@tanstack/react-query"

import { getEnvVariable } from "../../utils/apiSetter"
import { getTeams } from "../../utils/dataFetches"
import nbaStyles from "./nbaPage.module.css"
import { usePlayer } from "../../utils/usePlayer"

import { PlayerSearch } from "../../Components/PlayerSearch/PlayerSearch"
import { PlayerCard } from "../../Components/PlayerCard/PlayerCard"
import { PlayerCompare } from "../../Components/PlayerCompare/PlayerCompare"


export const NbaPage = () => {
    const { player1Stats, player2Stats, compareClicked, setClicked } = usePlayer()

    const compareRef = useRef(null)

    // CHECKLIST:
    // add basic design to NFL
    // add responsiviness
    // find place to get player pictures? web scrape?


    // ** Maybe pre-load all player data instead:
    const {data: teamsData, isPending, error, refetch} = useQuery({
        queryFn: getTeams,
        queryKey: ['allTeams'],
        enabled: false,
        initialData: null,
        initialDataUpdatedAt: Date.now(),
        
    })

    useEffect(() => {
        if (compareClicked && compareRef.current) {
            window.scroll({
                top: document.body.scrollHeight,
                left: 0,
                behavior: 'smooth'
            });

        }
    }, [compareClicked])

    function handleCompareClick() {
        console.log('comparing')
        if (!compareClicked) {
            setClicked(true)
        } else {
            window.scroll({
                top: document.body.scrollHeight,
                left: 0,
                behavior: 'smooth'
            });
        }
        
    }


    return (
        <main className={nbaStyles.mainNbaContainer}>
            <section className={`${nbaStyles.playerSearchSection}`}>
                <PlayerSearch 

                />
                {player1Stats && (
                    <div className={nbaStyles.fadeInContainer}>
                        <PlayerSearch 
                            isPlayer2={true}
                        />
                    </div>
                    
                )}
            </section>
            <div className={nbaStyles.createBtnContainer}>
                <button 
                    className={
                        `${player1Stats && player2Stats ? nbaStyles.visibleBtn : nbaStyles.createCompBtn}` 
                    }
                    disabled={
                        player1Stats && player2Stats && 
                        (player1Stats.seasons.length === 0 || player2Stats.seasons.length === 0) ? true : false
                    }
                    onClick={() => {
                        handleCompareClick()
                    }}
                >
                    {/* put player icon here */}
                    {compareClicked ? 'Go to Comparison' : 'Compare Players'}
                </button>
            </div>
            
            <section className={nbaStyles.playerCardSection}>
                <PlayerCard 

                />

                <PlayerCard 
                    isPlayer2={true}
                />
            </section>

            {/* comparison section */}
            {compareClicked && (
                <section className={nbaStyles.playerCompSection}>
                    <PlayerCompare 

                    /> 
                </section>

            )}
            <section className={nbaStyles.fillerSection}>
                <div ref={compareRef} className={nbaStyles.fillerContainer}>
                </div>
            </section>
            

        </main>
    )
   
}