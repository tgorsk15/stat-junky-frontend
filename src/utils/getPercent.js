export function getPercent(stat) {
    const newStat = (parseFloat(stat) * 100).toFixed(1)
    return newStat + '%'
}