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

export async function playersQuery() {
    const apiUrl = getEnvVariable()
    const response = await fetch(`${apiUrl}/player/search`, options)
    const data = await response.json()
    console.log(data)
    return data
}