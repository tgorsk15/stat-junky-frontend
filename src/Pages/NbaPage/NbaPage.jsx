import { useState } from "react"
import { useQuery, QueryClient, useQueryClient } from "@tanstack/react-query"
import { getEnvVariable } from "../../utils/apiSetter"

import { getTeams } from "../../utils/dataFetches"


export const NbaPage = () => {
    const [teamData, changeData] = useState(true) 
    const [isLoading, setLoading] = useState(false)


    const queryClient = useQueryClient()
    const {data: teamsData, isPending, error, refetch} = useQuery({
        queryFn: getTeams,
        queryKey: ['allTeams'],
        enabled: false,
        initialData: null,
        initialDataUpdatedAt: Date.now(),
        
    })

    async function handleLoadClick() {
        setLoading(true)
        await refetch()
        setLoading(false)
    }

    // async function testFetch() {
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

    // }


    return (
        <div>
            <h1>here is the nbaPage</h1>
            <button
                onClick={handleLoadClick}
            >
                Get teams
            </button>

            {isLoading && (
                <div>Its Loading ...</div>
            )}

            {teamsData && (
                <h2>teams is loaded</h2>
            )}

            {error && (
                <div>An error occurred: {error.message}</div>
            )}

        </div>
    )
}