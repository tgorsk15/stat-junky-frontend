import { useEffect, useState } from 'react'
import { usePlayer } from '../../utils/usePlayer'
import { getAverages } from '../../utils/getAverages'

import compareStyles from './playerComp.module.css'

export const PlayerCompare = () => {
    const {player1Stats, player2Stats} = usePlayer()

    const [player1Averages, setPlayer1Avgs] = useState(null)
    const [player2Averages, setPlayer2Avgs] = useState(null)

    let fgPercent1;
    let fgPercent2;
    let fg3Percent1;
    let fg3Percent2;
    let ftPercent1;
    let ftPercent2;


    useEffect(() => {
        console.log('use effect running')
        if (!player1Stats || !player2Stats) {
            return
        }
        const averages1 = getAverages(player1Stats.seasons)
        const averages2 = getAverages(player2Stats.seasons)
        setPlayer1Avgs(averages1)
        setPlayer2Avgs(averages2)
    }, [player1Stats, player2Stats])

    console.log('final average data:', player1Averages, player2Averages)

    if (player1Averages && player2Averages) {
        fgPercent1 = parseFloat(player1Averages.fg_pct)
        fgPercent2 = parseFloat(player2Averages.fg_pct)

        fg3Percent1 = parseFloat(player1Averages.fg3_pct)
        fg3Percent2 = parseFloat(player2Averages.fg3_pct)

        ftPercent1 = parseFloat(player1Averages.ft_pct)
        ftPercent2 = parseFloat(player2Averages.ft_pct)
    }


    return (
        
        <div className={compareStyles.compareContainer}>
            <h2 className={compareStyles.compareTitle}>Career Comparison</h2>
        {player1Averages && player2Averages ? (
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
                    <tr className={compareStyles.comparisonRow}>
                        <td>+/-</td>

                        <td className={`${player1Averages.games_played - player2Averages.games_played > 0 ? 
                            compareStyles.positive : compareStyles.negative}`}>
                            {player1Averages.games_played - player2Averages.games_played} 
                        </td>

                        <td className={`${player1Averages.pts - player2Averages.pts > 0 ? 
                            compareStyles.positive : compareStyles.negative}`}>
                            {(player1Averages.pts - player2Averages.pts).toFixed(2)} 
                        </td>

                        <td className={`${player1Averages.reb - player2Averages.reb > 0 ? 
                            compareStyles.positive : compareStyles.negative}`}>
                            {(player1Averages.reb - player2Averages.reb).toFixed(2)} 
                        </td>

                        <td className={`${player1Averages.oreb - player2Averages.oreb > 0 ? 
                            compareStyles.positive : compareStyles.negative}`}>
                            {(player1Averages.oreb - player2Averages.oreb).toFixed(2)} 
                        </td>

                        <td className={`${player1Averages.ast - player2Averages.ast > 0 ? 
                            compareStyles.positive : compareStyles.negative}`}>
                            {(player1Averages.ast - player2Averages.ast).toFixed(2)} 
                        </td>

                        <td className={`${player1Averages.stl - player2Averages.stl > 0 ? 
                            compareStyles.positive : compareStyles.negative}`}>
                            {(player1Averages.stl - player2Averages.stl).toFixed(2)} 
                        </td>

                        <td className={`${player1Averages.blk - player2Averages.blk > 0 ? 
                            compareStyles.positive : compareStyles.negative}`}>
                            {(player1Averages.blk - player2Averages.blk).toFixed(2)} 
                        </td>

                        <td className={`${player1Averages.turnover - player2Averages.turnover > 0 ? 
                            compareStyles.positive : compareStyles.negative}`}>
                            {(player1Averages.turnover - player2Averages.turnover).toFixed(2)} 
                        </td>

                        <td className={`${player1Averages.fgm - player2Averages.fgm > 0 ? 
                            compareStyles.positive : compareStyles.negative}`}>
                            {(player1Averages.fgm - player2Averages.fgm).toFixed(2)} 
                        </td>

                        <td className={`${(fgPercent1 - fgPercent2).toFixed(2) > 0 ? 
                            compareStyles.positive : compareStyles.negative}`}>
                            {(fgPercent1 - fgPercent2).toFixed(2) + '%'}
                        </td>

                        <td className={`${player1Averages.fg3m - player2Averages.fg3m > 0 ? 
                            compareStyles.positive : compareStyles.negative}`}>
                            {(player1Averages.fg3m - player2Averages.fg3m).toFixed(2)} 
                        </td>

                        <td className={`${(fg3Percent1 - fg3Percent2).toFixed(2) > 0 ? 
                            compareStyles.positive : compareStyles.negative}`}>
                            {(fg3Percent1 - fg3Percent2).toFixed(2) + '%'} 
                        </td>

                        <td className={`${player1Averages.ftm - player2Averages.ftm > 0 ? 
                            compareStyles.positive : compareStyles.negative}`}>
                            {(player1Averages.ftm - player2Averages.ftm).toFixed(2)} 
                        </td>

                        <td className={`${(ftPercent1 - ftPercent2).toFixed(2) > 0 ? 
                            compareStyles.positive : compareStyles.negative}`}>
                            {(ftPercent1 - ftPercent2).toFixed(2) + '%'}  
                        </td>
                    </tr>
                </tbody>
            </table>
        
        ) : null }
        </div>
        // TMW 2/18:
        // build a "back out" funciton on player search
        // change compare button after click
        // eventually create loading animations
        
    )

}