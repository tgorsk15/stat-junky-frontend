import PropTypes from "prop-types"
import cardStyles from './playerCard.module.css'

export const PlayerCard = ({ player1, player1Load }) => {


    return (
        <>
            {player1Load ? (
                 <h2>Loading</h2>

            ) : (
                
                player1 && (
                    <div className={cardStyles.cardContainer}>
                        I am playerCard
                    </div> 
                )
            )}
            
        </>
        
    )

}

PlayerCard.propTypes = {
    player1: PropTypes.any
}