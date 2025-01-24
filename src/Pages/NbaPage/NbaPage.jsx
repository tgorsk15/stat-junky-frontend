import { getEnvVariable } from "../../utils/apiSetter"

export const NbaPage = () => {

    async function testFetch() {
        const options = {
            method: "GET",
            headers: {"Content-Type": "application/json"},
        }

        try {
            const apiUrl = getEnvVariable()
            const response = await fetch(`${apiUrl}`, options) 
            const data = await response.json()
            console.log(data)

        } catch(err) {
            console.log(err)
        }
        
    }
    // testFetch()

    return (
        <div>
            <h1>here is the nbaPage</h1>
            <button
                onClick={testFetch}
            >
                Test
            </button>
        </div>
    )
}