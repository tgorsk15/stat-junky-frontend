import PropTypes from "prop-types"
import { useContext } from "react"
import { usePlayer } from "../../utils/usePlayer"

import cardStyles from './playerCard.module.css'

export const PlayerCard = () => {
    const { player1Load, player1Stats } = usePlayer()
    let currentPlayer = player1Stats;

    // ** will have to revisit and refactor to accomadate for player2
    // will do this check to switch if necessary:
    if (player1Stats) {
        // currentPlayer = player2Stats
    }
    // maybe use a useEffect for the above?

    if (!currentPlayer) {
        return
    }

    

    const player = currentPlayer.playerData
    const seasons = currentPlayer.seasons


    return (
        <>
            {player1Load ? (
                 <h2>Loading</h2>

            ) : (
                
                player1Stats && (
                    <div className={cardStyles.cardContainer}>
                        <h2 className={cardStyles.playerTitle}>
                            {player.first_name} {player.last_name}
                        </h2>

                        <div className={cardStyles.cardBody}>
                            <div className={cardStyles.statsDescription}>
                                <h5>GS</h5>
                                <h5>PTS</h5>
                                <h5>RBS</h5>
                                <h5>ORB</h5>
                                <h5>AST</h5>
                                <h5>STL</h5>
                                <h5>BLK</h5>
                                <h5>TOV</h5>
                                <h5>FG%</h5>
                                <h5>FGM</h5>
                                <h5>3PM</h5>
                                <h5>3P%</h5>
                                <h5>FTM</h5>
                                <h5>FT%</h5>
                            </div>
                            {seasons.map((season) => {
                                return (
                                    <div key={season.season} className={cardStyles.seasonRow}>
                                        
                                    </div>
                                )
                            })
                            
                            }
                        </div>
                    </div> 
                )
            )}
            
        </>
        
    )

}

PlayerCard.propTypes = {
    playerStats: PropTypes.any,
    playerLoad: PropTypes.bool
}