export function getAverages(seasons) {
    console.log('average of this player:', seasons)
    const averages = Array(20).fill(0)
    // we can take averages of the first 19 items in each season array
    for (const season of seasons) {
        let statIndex = 0
        for (const [key, value] of Object.entries(season[0])) {
            if (key !== 'season' && key !== 'player_id') {
                if (key === 'min') {
                    const [minutes, seconds] = value.split(':')
                    const minutesAmount = Number(minutes) + Number(seconds) / 60
                    averages[statIndex] += minutesAmount
                } else {
                    averages[statIndex] += value
                }
            
            }
            statIndex += 1
        }
        console.log('averages after sums:', averages)
    }

    for (let i = 0; i < seasons.length; i++) {
        averages[i] = averages[i] / seasons.length
    }
    console.log('newAverages:', averages)

}