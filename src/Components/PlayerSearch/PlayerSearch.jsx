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
        setPlayer1Exist, changeP1Results,  
        setPlayer2Exist, changeP2Results} = usePlayer()

    const [query, changeQuery] = useState("")


    async function handleSearch(e) {
        e.preventDefault()
        
        const formData = new FormData(e.target)
        const newQuery = formData.get('searchBox')
        changeQuery(newQuery)

        if (isPlayer2) {
            setPlayer2Exist(true)
        } else {
            setPlayer1Exist(true)
        }

        const response = await playersQuery(newQuery)
        const data = response.players.data

        if (isPlayer2) {
            changeP2Results(data)
        } else {
            changeP1Results(data)
        }
    }


    async function handleResultClick(player) {

        if (isPlayer2) {
            setPlayer2Exist(false)
            setPlayer2Load(true)
            const seasonStats = await getPlayerStats(player)
            setPlayer2Load(false)
            console.log('player 2 seasons', seasonStats)
            setPlayer2Stats(seasonStats)

        } else {
            setPlayer1Exist(false)
            setPlayer1Load(true)
            const seasonStats = await getPlayerStats(player)
            setPlayer1Load(false)
            console.log('player seasons', seasonStats)
            setPlayer1Stats(seasonStats)  
        }
        
    }


    return (
        <div 
            className={`${isPlayer2 ? nbaPage.searchContainer2 : nbaPage.searchContainer}`}
        >
            <h3>{isPlayer2 ? 'Add Player 2:' : 'Add Player 1:'}</h3>
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
                isPlayer2={isPlayer2}
            />
        </div>
    )

}

PlayerSearch.propTypes = {
    isPlayer2: PropTypes.bool
}
