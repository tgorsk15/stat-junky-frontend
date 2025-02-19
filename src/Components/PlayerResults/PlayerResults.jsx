import PropTypes from "prop-types"
import nbaPage from "../../Pages/NbaPage/nbaPage.module.css"
import { usePlayer } from "../../utils/usePlayer"


export const PlayerResults = ({ handleResultClick, isPlayer2 }) => {
    const { player1Exists, player1Results, player2Exists, player2Results,
        setPlayer1Exist, setPlayer2Exist
     } = usePlayer()

    const playerExists = isPlayer2 ? player2Exists : player1Exists
    const playerResults = isPlayer2 ? player2Results : player1Results

    let emptyResults = false
    if (playerResults.length === 0) {
        emptyResults = true
    }


    return (
        <div className={`{nbaPage.resultsBox} ${playerExists ? nbaPage.activeList : ''}`}>
            {playerExists && (
                <button 
                    className={nbaPage.exitSearchBtn}
                    onClick={() => {
                        console.log('clicking back')
                        // setSearchState(false)
                        if (isPlayer2) {
                            setPlayer2Exist(false)
                        } else {
                            setPlayer1Exist(false)
                        }
                    }}
                >
                    X
                </button>
            )}
           {playerExists && (
                               
                playerResults.map((player) => {
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
                    
            ) }

            {playerExists && emptyResults && (
                <h2 className={nbaPage.noResultsHeader}>
                    No results
                </h2>
            )}

        </div>
    )

}

PlayerResults.propTypes = {
    handleResultClick: PropTypes.func,
    isPlayer2: PropTypes.bool
}