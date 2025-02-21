export function getPercent(stat) {
    console.log('stat being worked on', stat)
    const newStat = (parseFloat(stat) * 100).toFixed(1)
    // const newStat = (stat * 100) + '%'
    return newStat + '%'
}