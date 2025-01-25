import { useState } from "react"
import { useQuery, QueryClient, useQueryClient } from "@tanstack/react-query"
import { getEnvVariable } from "../../utils/apiSetter"

const queryClient = new QueryClient()

export const NbaPage = () => {
    const [teamData, changeData] = useState(true) 

    const options = {
        method: "GET",
        headers: {"Content-Type": "application/json"},
    }

    const queryClient = useQueryClient
    const {data: teams, isPending} = useQuery({
        queryFn: async () => {
            const apiUrl = getEnvVariable()
            const response = await fetch(`${apiUrl}`, options)
            return await response.json()
        },
        queryKey: 'teams'
    })

    async function testFetch() {
        // const options = {
        //     method: "GET",
        //     headers: {"Content-Type": "application/json"},
        // }

        // try {
        //     const apiUrl = getEnvVariable()
        //     const response = await fetch(`${apiUrl}`, options) 
        //     const data = await response.json()
        //     console.log(data)

        // } catch(err) {
        //     console.log(err)
        // }

    }


    return (
        <div>
            <h1>here is the nbaPage</h1>
            <button
                onClick={testFetch}
            >
                Get teams
            </button>

            {isPending && (
                <div>Its Loading ...</div>
            )}

            {data && (
                <h2>teams is loaded</h2>
            )}

        </div>
    )
}