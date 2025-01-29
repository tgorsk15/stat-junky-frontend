import { useQuery, useQueryClient } from "@tanstack/react-query"
import { playersQuery } from "../../utils/dataFetches"
import nbaPage from "../../Pages/NbaPage/nbaPage.module.css"
import { useState } from "react"
import PropTypes from "prop-types"

import { PlayerResults } from "../PlayerResults/PlayerResults"


export const PlayerSearch = ({ setPlayer1 }) => {
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

            <PlayerResults 
                resultsExist={resultsExist}
                results={results}
                setPlayer1={setPlayer1}
            />
        </div>
    )

}

PlayerSearch.propTypes = {
    setPlayer1: PropTypes.func
}
