import { getEnvVariable } from "./apiSetter"

const options = {
        method: "GET",
        headers: {"Content-Type": "application/json"},
    }

export async function getTeams() {
    const apiUrl = getEnvVariable()
    const response = await fetch(`${apiUrl}`, options)
    const data = await response.json()
    console.log(data)
    return data
}

export async function playersQuery(query) {
    const apiUrl = getEnvVariable()
    console.log('query before sending', query)
    const response = await fetch(`${apiUrl}player/search/${query}`, options)
    const data = await response.json()
    console.log(data)
    return data
}

export async function getPlayerStats(playerId) {
    const apiUrl = getEnvVariable()
    const response = await fetch(`${apiUrl}player/seasons/${15}`, options)
    const data = await response.json()
    console.log(data)
}