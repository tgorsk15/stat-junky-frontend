export function getAverages(seasons) {
    console.log('average of this player:', seasons)
    const averages = Array(20).fill(0)
    console.log(averages)
    // we can take averages of the first 19 items in each season array
    for (const season of seasons) {
        let statIndex = 0
        for (const [key, value] of Object.entries(season)) {
            console.log(season)
            if (key !== 'season' || key !== 'player_id') {
                if (key === 'min') {
                    const [minutes, seconds] = value.split(':')
                    const minutesAmount = Number(minutes) + Number(seconds) / 60
                    averages[statIndex] += minutesAmount
                } else {
                    averages[statIndex] += value
                }
            }
            console.log('averages after sums:', averages)
        }
    }



}