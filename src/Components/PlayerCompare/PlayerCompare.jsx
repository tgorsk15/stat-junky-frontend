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
                        <th>FG%</th>
                        <th>FGM</th>
                        <th>3P%</th>
                        <th>3PM</th>
                        <th>FTM</th>
                        <th>FT%</th>
                    </tr>
                </thead>
                <tbody className={compareStyles.compareBody}>
                    <tr>
                        <td>Player 1</td>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                    </tr>

                    <tr>
                        <td>Player 2</td>
                        <td>4</td>
                        <td>5</td>
                        <td>6</td>
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