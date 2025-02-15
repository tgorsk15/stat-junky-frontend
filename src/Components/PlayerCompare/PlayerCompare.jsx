import { useEffect, useState } from 'react'
import { usePlayer } from '../../utils/usePlayer'
import { getAverages } from '../../utils/getAverages'

import compareStyles from './playerComp.module.css'

export const PlayerCompare = () => {
    const {player1Stats, player2Stats} = usePlayer()

    const [player1Averages, setPlayer1Avgs] = useState(null)
    const [player2Averages, setPlayer2Avgs] = useState(null)

    useEffect(() => {
        if (!player1Stats || !player2Stats) {
            return
        }
        const averages1 = getAverages(player1Stats.seasons)
        const averages2 = getAverages(player2Stats.seasons)
        setPlayer1Avgs(averages1)
        setPlayer2Avgs(averages2)
    }, [player1Stats, player2Stats])

    console.log('final average data:', player1Averages, player2Averages)


    return (
        <div className={compareStyles.compareContainer}>
            <table className={compareStyles.compareTable}>
                <thead>
                    <tr className={compareStyles.compareHeader}>
                        <th>Player</th>
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
                <tbody className={compareStyles.compareBody}>
                    <tr className={compareStyles.player1Row}>
                        <td> 
                            {player1Stats.playerData.first_name} {player1Stats.playerData.last_name}
                        </td>
                        <td> {player1Averages.games_played} </td>
                        <td> {player1Averages.pts} </td>
                        <td> {player1Averages.reb} </td>
                        <td> {player1Averages.oreb} </td>
                        <td> {player1Averages.ast} </td>
                        <td> {player1Averages.stl} </td>
                        <td> {player1Averages.blk} </td>
                        <td> {player1Averages.turnover} </td>
                        <td> {player1Averages.fgm} </td>
                        <td> {player1Averages.fg_pct} </td>
                        <td> {player1Averages.fg3m} </td>
                        <td> {player1Averages.fg3_pct} </td>
                        <td> {player1Averages.ftm} </td>
                        <td> {player1Averages.ft_pct} </td>
                    </tr>

                    <tr className={compareStyles.player2Row}>
                        <td>
                            {player2Stats.playerData.first_name} {player2Stats.playerData.last_name}
                        </td>
                        <td> {player2Averages.games_played} </td>
                        <td> {player2Averages.pts} </td>
                        <td> {player2Averages.reb} </td>
                        <td> {player2Averages.oreb} </td>
                        <td> {player2Averages.ast} </td>
                        <td> {player2Averages.stl} </td>
                        <td> {player2Averages.blk} </td>
                        <td> {player2Averages.turnover} </td>
                        <td> {player2Averages.fgm} </td>
                        <td> {player2Averages.fg_pct} </td>
                        <td> {player2Averages.fg3m} </td>
                        <td> {player2Averages.fg3_pct} </td>
                        <td> {player2Averages.ftm} </td>
                        <td> {player2Averages.ft_pct} </td>
                    </tr>
                    <tr>
                        <td>+/-</td>
                        <td>7</td>
                        <td>8</td>
                        <td>9</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )

}