import { getEnvVariable } from "./apiSetter"

export async function getTeams() {
    const options = {
        method: "GET",
        headers: {"Content-Type": "application/json"},
    }

    const apiUrl = getEnvVariable()
    const response = await fetch(`${apiUrl}`, options)
    const data = await response.json()
    console.log(data)
    return data
}