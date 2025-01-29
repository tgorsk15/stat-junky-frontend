import cardStyles from './playerCard.module.css'

export const PlayerCard = ({ player1 }) => {


    return (
        <>
            {player1 && (
                <div className={cardStyles.cardContainer}>
                    I am playerCard
                </div> 
            ) 

            }
        </>
        
    )

}