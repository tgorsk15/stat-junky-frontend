import PropTypes from "prop-types"
import nbaPage from "../../Pages/NbaPage/nbaPage.module.css"
import { usePlayer } from "../../utils/usePlayer"

// import { getPlayerStats } from "../../utils/dataFetches"

export const PlayerResults = ({ handleResultClick }) => {
    const { resultsExist, results } = usePlayer()

    return (
        <div className={`{nbaPage.resultsBox} ${resultsExist ? nbaPage.activeList : ''}`}>
           {resultsExist && (
                               
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
                    
            )}
        </div>
    )

}

PlayerResults.propTypes = {
    resultsExist: PropTypes.bool,
    results: PropTypes.any,
    handleResultClick: PropTypes.func
}