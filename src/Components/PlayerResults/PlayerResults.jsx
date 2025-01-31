import PropTypes from "prop-types"
import nbaPage from "../../Pages/NbaPage/nbaPage.module.css"

import { getPlayerStats } from "../../utils/dataFetches"

export const PlayerResults = ({ resultsExist, setResults, results, setPlayer1 }) => {

    function handleResultClick(player) {
        const seasonStats = getPlayerStats(player)
        setResults(false)
        console.log('player in frontend:', player)
        setPlayer1('player1 exists')

        // TMW 1/29:
        // IMPORTANT: need to think how to cut off player data on their last season
        // to avoid empty seasons in returned data
        // start working to take the returned data and putting it into PlayerCard component
        
    }

    return (
        <div className={`{nbaPage.resultsBox} ${resultsExist ? nbaPage.activeList : ''}`}>
           {resultsExist ? (
                               
                results.map((player) => {
                    return (
                        <div key={player.id} className={nbaPage.playerResult}>
                            <button 
                                className={nbaPage.playerLink}
                                onClick={() => handleResultClick(player)}
                            >
                                {player.first_name} {player.last_name}
                            </button>
                        </div>
                    )
                })
                    
            ) : (
                <div>no results</div>
            )}
        </div>
    )

}

PlayerResults.propTypes = {
    resultsExist: PropTypes.bool,
    results: PropTypes.any,
    setPlayer1: PropTypes.func
}