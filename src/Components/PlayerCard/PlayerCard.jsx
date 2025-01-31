import PropTypes from "prop-types"
import cardStyles from './playerCard.module.css'

export const PlayerCard = ({ player, playerLoad }) => {


    return (
        <>
            {playerLoad ? (
                 <h2>Loading</h2>

            ) : (
                
                player && (
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
    player: PropTypes.any,
    playerLoad: PropTypes.bool
}