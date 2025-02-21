import PropTypes from "prop-types"
import { useContext } from "react"
import { usePlayer } from "../../utils/usePlayer"
import { getPercent } from "../../utils/getPercent"

import cardStyles from './playerCard.module.css'

export const PlayerCard = ({isPlayer2}) => {
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


    return (
        <>
                {/* NEED TO convert % stats into %s... */}
                {/* ...hook it up to getPercent function I made */}
            {currentPlayerStats && (
                <div className={cardStyles.cardContainer}>
                    <div className={cardStyles.cardHeader}>
                        <h2 className={cardStyles.playerTitle}>
                            {player.first_name} {player.last_name}
                        </h2>
                        <div className={cardStyles.playerDetails}>
                            <h5>{player.team.full_name}</h5>
                            <h5 className={cardStyles.jersey}>Jersey: #{player.jersey_number}</h5>
                            <h5>Position: {player.position}</h5>
                            <h5 className={cardStyles.college}>College: {player.college}</h5>
                            <h5 className={cardStyles.height}>Height: {player.height}</h5>
                            <h5>Weight: {player.weight}lb</h5>
                        </div>
                    </div>
                    

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
                                    <th>FGM</th>
                                    <th>FG%</th>
                                    <th>3PM</th>
                                    <th>3P%</th>
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
                                            <td>{year[0].pts.toFixed(1)}</td>
                                            <td>{year[0].reb.toFixed(1)}</td>
                                            <td>{year[0].oreb.toFixed(1)}</td>
                                            <td>{year[0].ast.toFixed(1)}</td>
                                            <td>{year[0].stl.toFixed(1)}</td>
                                            <td>{year[0].blk.toFixed(1)}</td>
                                            <td>{year[0].turnover.toFixed(1)}</td>
                                            <td>{year[0].fgm.toFixed(1)}</td>
                                            <td>{getPercent(year[0].fg_pct.toFixed(4))}</td>
                                            <td>{year[0].fg3m.toFixed(1)}</td>
                                            <td>{getPercent(year[0].fg3_pct.toFixed(4))}</td>
                                            <td>{year[0].ftm.toFixed(1)}</td>
                                            <td>{getPercent(year[0].ft_pct.toFixed(4))}</td>
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