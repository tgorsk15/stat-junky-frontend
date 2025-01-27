import { useQuery, useQueryClient } from "@tanstack/react-query"
import { playersQuery } from "../../utils/dataFetches"

import nbaPage from "../../Pages/NbaPage/nbaPage.module.css"
import { useState } from "react"


export const PlayerSearch = () => {
    const [query, changeQuery] = useState("")
    const [resultsExist, setResults] = useState(false)
    const [results, changeResults] = useState('')
    // might need to create a loading state here for waiting for results


    async function handleSearch(e) {
        e.preventDefault()
        
        const formData = new FormData(e.target)
        const newQuery = formData.get('searchBox')
        changeQuery(newQuery)

        const response = await playersQuery(newQuery)
        const data = response.players.data
        console.log('here is data:', data)
        setResults(true)
        changeResults(data)
    }

    return (
        <div className={nbaPage.searchSection}>
            <form
                onSubmit={handleSearch}
                className={`${nbaPage.playerSearchForm}`}
            >
                <input 
                    type="text"
                    name="searchBox"
                    className={`${nbaPage.searchBox}`}
                />
                <button
                    className={`${nbaPage.searchSubmit}`}
                >
                    Search
                </button>
            </form>


            <div className={`{nbaPage.resultsBox} ${resultsExist ? nbaPage.activeList : ''}`}>
                {/* **POSSIBLY move everything below into PlayerResults component */}
                {resultsExist ? (
                    
                    results.map((player) => {
                        return (
                            <div key={player.id} className={nbaPage.playerResult}>
                                <button className={nbaPage.playerLink}>
                                    {player.first_name} {player.last_name}
                                </button>
                            </div>
                        )
                    })
                    
                ) : (
                    <div>no results</div>
                )}
            </div>
        </div>
    )

}

// LEFT OFF HERE:
// start testing to see if we can fetch player stats, configure backend
// also need to link click of search result to pulling up player card and
// triggering this fetch...
// so we need to lift state of player1 upto NbaPage... where PlayerCard
// will be a nested Component that then displays