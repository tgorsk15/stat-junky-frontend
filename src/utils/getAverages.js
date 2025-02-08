export function getAverages(seasons) {
    console.log('average of this player:', seasons)


    // const averages = Array(20).fill(0)
    // new attempt:
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
        // let statIndex = 0
        for (const [key, value] of Object.entries(season[0])) {
            if (key !== 'season' && key !== 'player_id') {
                if (key === 'min') {
                    const [minutes, seconds] = value.split(':')
                    const minutesAmount = Number(minutes) + Number(seconds) / 60
                    averages[key] += minutesAmount
                } else {
                    averages[key] += value
                }
            
            }
            // statIndex += 1
        }
        console.log('averages after sums:', averages)
    }

    // TMW 2/8:

    // logic is incorrect here... only divides as many stats as there
    // are seasons
    // ... its ok to divide # of games played, it'll give a season avg
    for (let i = 0; i < seasons.length; i++) {
        // implement check for 
        // averages[i] = averages[i] / seasons.length
    }
    console.log('newAverages:', averages)
    return averages

}