import PropTypes from "prop-types"
import { useContext } from "react"
import { usePlayer } from "../../utils/usePlayer"

import cardStyles from './playerCard.module.css'

export const PlayerCard = () => {
    const { player1Load, player1Stats } = usePlayer()
    // will have to revisit and refactor to accomadate for player2


    return (
        <>
            {player1Load ? (
                 <h2>Loading</h2>

            ) : (
                
                player1Stats && (
                    <div className={cardStyles.cardContainer}>
                        <h2 className={cardStyles.playerTitle}>
                            
                        </h2>
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