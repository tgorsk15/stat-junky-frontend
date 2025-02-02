import { useQuery, useQueryClient } from "@tanstack/react-query"
import { playersQuery } from "../../utils/dataFetches"

import nbaPage from "../../Pages/NbaPage/nbaPage.module.css"
import { useState } from "react"
import PropTypes from "prop-types"
import { usePlayer } from "../../utils/usePlayer"

import { PlayerResults } from "../PlayerResults/PlayerResults"
import { getPlayerStats } from "../../utils/dataFetches"


export const PlayerSearch = ({isPlayer2}) => {
    const { setPlayer1Stats, setPlayer1Load, setPlayer2Stats, setPlayer2Load,
        setResults, changeResults } = usePlayer()

    const [query, changeQuery] = useState("")


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


    async function handleResultClick(player) {
        setResults(false)

        if (isPlayer2) {
            console.log('im player 2')
            setPlayer2Load(true)
            const seasonStats = await getPlayerStats(player)
            setPlayer2Load(false)
            console.log('player 2 seasons', seasonStats)
            setPlayer2Stats(seasonStats)

        } else {
            setPlayer1Load(true)
            const seasonStats = await getPlayerStats(player)
            setPlayer1Load(false)
            console.log('player seasons', seasonStats)
            setPlayer1Stats(seasonStats)  
        }
        
    }
    // LEFT OFF HERE:
    // need to figure out how to fix loading on player cards
    // ...need to fix states of both search menus at once


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
                handleResultClick={handleResultClick}
            />
        </div>
    )

}

PlayerSearch.propTypes = {
    isPlayer2: PropTypes.bool
}
