import { getEnvVariable } from "./apiSetter"

const options = {
        method: "GET",
        headers: {"Content-Type": "application/json"},
    }

export async function getTeams() {
    const apiUrl = getEnvVariable()
    const response = await fetch(`${apiUrl}`, options)
    const data = await response.json()
    return data
}

export async function playersQuery(query) {
    const apiUrl = getEnvVariable()
    const response = await fetch(`${apiUrl}player/search/${query}`, options)
    const data = await response.json()
    return data
}

export async function getPlayerStats(player) {
    const postOptions = {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(player)
    }

    const apiUrl = getEnvVariable()
    const response = await fetch(`${apiUrl}player/seasons`, postOptions)
    const data = await response.json()
    return data
}