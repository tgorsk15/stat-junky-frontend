import { useQuery, useQueryClient } from "@tanstack/react-query"
import { playersQuery } from "../../utils/dataFetches"

import nbaPage from "../../Pages/NbaPage/nbaPage.module.css"
import { useState } from "react"


export const PlayerSearch = () => {
    const [query, changeQuery] = useState("")

    // const queryClient = useQueryClient()
    // const {data: playerResults, error, refetch} = useQuery({
    //     queryFn: () => playersQuery(query),
    //     queryKey: ['playerResults', query],
    //     enabled: !!query,
        
    // })

    function handleSearch(e) {
        e.preventDefault()
        

        const formData = new FormData(e.target)
        const newQuery = formData.get('searchBox')
        changeQuery(newQuery)

        console.log('users search:', newQuery)
        const results = playersQuery(newQuery)
        console.log('here are results:', results)
    }

    return (
        <div>
            <form
                onSubmit={handleSearch}
                className={`${nbaPage.playerSearchForm}`}
            >
                <input 
                    type="text"
                    name="searchBox"
                    className={`${nbaPage.searchBox}`}
                />
                <button
                    className={`${nbaPage.searchSubmit}`}
                >
                    Search
                </button>
            </form>

            {/* here, if player results exist, display <playerResults/> here */}
        </div>
    )

}