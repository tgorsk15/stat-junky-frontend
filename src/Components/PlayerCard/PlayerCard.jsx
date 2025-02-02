import PropTypes from "prop-types"
import { useContext } from "react"
import { usePlayer } from "../../utils/usePlayer"

import cardStyles from './playerCard.module.css'

export const PlayerCard = ({isPlayer2}) => {
    console.log('boolean player check:', isPlayer2)

    const { player1Load, player1Stats, player2Load, player2Stats } = usePlayer()
    const currentPlayerStats = isPlayer2 ? player2Stats : player1Stats
    const isLoading = isPlayer2 ? player2Load : player1Load

    if (isLoading) {
        return (
            <h2>Loading {isPlayer2 ? 'player 2' : 'player 1'}</h2>
        )
    }

    if (!currentPlayerStats) {
        return
    }
    

    const player = currentPlayerStats.playerData
    const seasons = currentPlayerStats.seasons
    console.log("seasons layout", seasons)


    return (
        <>
                
            {currentPlayerStats && (
                <div className={cardStyles.cardContainer}>
                    <h2 className={cardStyles.playerTitle}>
                        {player.first_name} {player.last_name}
                    </h2>

                    <div className={cardStyles.cardBody}>
                        <table className={cardStyles.dataTable}>
                            <thead>
                                <tr className={cardStyles.headerRow}>
                                    <th>Season</th>
                                    <th>GS</th>
                                    <th>PTS</th>
                                    <th>RBS</th>
                                    <th>ORB</th>
                                    <th>AST</th>
                                    <th>STL</th>
                                    <th>BLK</th>
                                    <th>TOV</th>
                                    <th>FG%</th>
                                    <th>FGM</th>
                                    <th>3P%</th>
                                    <th>3PM</th>
                                    <th>FTM</th>
                                    <th>FT%</th>
                                </tr> 
                            </thead>
                            
                            <tbody>
                                {seasons.map((year) => {
                                    return (
                                        <tr key={year.season} className={cardStyles.seasonRow}>
                                            <td>{year[0].season}</td>
                                            <td>{year[0].games_played}</td>
                                            <td>{Math.round(year[0].pts * 10) / 10}</td>
                                            <td>{Math.round(year[0].reb * 10) / 10}</td>
                                            <td>{Math.round(year[0].oreb * 10) / 10}</td>
                                            <td>{Math.round(year[0].ast * 10) / 10}</td>
                                            <td>{Math.round(year[0].stl * 10) / 10}</td>
                                            <td>{Math.round(year[0].blk * 10) / 10}</td>
                                            <td>{Math.round(year[0].turnover * 10) / 10}</td>
                                            <td>{Math.round(year[0].fg_pct * 10) / 10}</td>
                                            <td>{Math.round(year[0].fgm * 10) / 10}</td>
                                            <td>{Math.round(year[0].fg3_pct * 10) / 10}</td>
                                            <td>{Math.round(year[0].fg3m * 10) / 10}</td>
                                            <td>{Math.round(year[0].ftm * 10) / 10}</td>
                                            <td>{Math.round(year[0].ft_pct * 10) / 10}</td>
                                        </tr>
                                    )
                                })} 
                            </tbody>
                            
                        </table>
                        
                    </div>
                </div> 
            )}
            
        </>
        
    )

}

PlayerCard.propTypes = {
    isPlayer2: PropTypes.bool
}