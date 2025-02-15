import { getPercent } from "./getPercent"

export function getAverages(seasons) {
    console.log('average of this player:', seasons)

    const averages = {
        ast: 0, blk: 0, dreb: 0, fg3_pct: 0,
        fg3a: 0, fg3m: 0, fg_pct: 0, fga: 0, 
        fgm: 0, ft_pct: 0, fta: 0, ftm: 0,
        games_played: 0, min: 0, oreb: 0, pf: 0,
        pts: 0, reb: 0, stl: 0, turnover: 0
    }


    // may need to revise and use object
    // for (const season of seasons) {
    //     let statIndex = 0
    //     for (const [key, value] of Object.entries(season[0])) {
    //         if (key !== 'season' && key !== 'player_id') {
    //             if (key === 'min') {
    //                 const [minutes, seconds] = value.split(':')
    //                 const minutesAmount = Number(minutes) + Number(seconds) / 60
    //                 averages[statIndex] += minutesAmount
    //             } else {
    //                 averages[statIndex] += value
    //             }
            
    //         }
    //         statIndex += 1
    //     }
    //     console.log('averages after sums:', averages)
    // }

    // new version
    for (const season of seasons) {
        for (const [key, value] of Object.entries(season[0])) {
            if (key !== 'season' && key !== 'player_id') {
                if (key === 'min') {
                    const [minutes, seconds] = value.split(':')
                    const minutesAmount = Number(minutes) + Number(seconds) / 60
                    averages[key] += minutesAmount
                } else {
                    averages[key] += value
                }
                // ** PROBABLY make a separate function for converting shooting stats
                // into %s... can use this in initial stat generation as well
            
            }
        }
        console.log('averages after sums:', averages)
    }

    for (const [key, value] of Object.entries(averages)) {
        averages[key] = (averages[key] / seasons.length)

        // FIX averages before adding the below
        if (key === 'fg_pct' || key === 'fg3_pct' || key === 'ft_pct') {
            averages[key] = averages[key].toFixed(4)
            console.log('%', averages[key])
            const percentStat = getPercent(averages[key])
            averages[key] = percentStat
            console.log('revised stat', averages[key])

        } else if (key !== 'games_played') {
            averages[key] = averages[key].toFixed(2)
        }

    }
    console.log('newAverages:', averages)
    return averages

}