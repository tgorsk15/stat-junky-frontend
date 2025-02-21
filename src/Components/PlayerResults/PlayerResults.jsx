import PropTypes from "prop-types"
import nbaPage from "../../Pages/NbaPage/nbaPage.module.css"
import { usePlayer } from "../../utils/usePlayer"


export const PlayerResults = ({ handleResultClick, isPlayer2, searchLoading }) => {
    const { player1Exists, player1Results, player2Exists, player2Results,
        setPlayer1Exist, setPlayer2Exist, changeP1Results, changeP2Results
     } = usePlayer()

    const playerExists = isPlayer2 ? player2Exists : player1Exists
    let playerResults = isPlayer2 ? player2Results : player1Results

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
                        if (isPlayer2) {
                            changeP2Results('')
                            setPlayer2Exist(false)
                        } else {
                            changeP1Results('')
                            setPlayer1Exist(false)
                        }
                    }}
                >
                    X
                </button>
            )}
           {playerExists && playerResults && (
                               
                playerResults.map((player) => {
                    return (
                        <div key={player.id} className={nbaPage.playerResult}>
                            <button 
                                className={nbaPage.playerLink}
                                onClick={() => {
                                    handleResultClick(player)
                                }}
                            >
                                {player.first_name} {player.last_name}
                            </button>
                        </div>
                    )
                })
                    
            ) }

            {playerExists && emptyResults && (
                searchLoading ? (
                    <div className={nbaPage.searchSpinner}>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                ) : (
                    <h2 className={nbaPage.noResultsHeader}>
                        No results
                    </h2>
                )
                
            )}

        </div>
    )

}

PlayerResults.propTypes = {
    handleResultClick: PropTypes.func,
    isPlayer2: PropTypes.bool,
    searchLoading: PropTypes.func
}