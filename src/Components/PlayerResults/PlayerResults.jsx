import PropTypes from "prop-types"
import nbaPage from "../../Pages/NbaPage/nbaPage.module.css"

export const PlayerResults = ({ resultsExist, results }) => {


    return (
        <div className={`{nbaPage.resultsBox} ${resultsExist ? nbaPage.activeList : ''}`}>
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
    )

}

PlayerResults.propTypes = {
    resultsExist: PropTypes.bool,
    results: PropTypes.any
}