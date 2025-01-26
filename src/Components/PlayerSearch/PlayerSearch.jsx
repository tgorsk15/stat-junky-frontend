import { useQuery, useQueryClient } from "@tanstack/react-query"
import { playersQuery } from "../../utils/dataFetches"

import nbaPage from "../../Pages/NbaPage/nbaPage.module.css"


export const PlayerSearch = () => {

    const queryClient = useQueryClient()
    const {data: playerResults, error, refetch} = useQuery({
        queryFn: playersQuery,
        queryKey: ['playerResults'],
        enabled: false,
        initialData: null,
        initialDataUpdatedAt: Date.now(),
    })

    function handleSearch(e) {
        e.preventDefault()
        refetch()
        console.log('hey there')
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

            {/* left off here: */}
            {/* here, if player results exist, display <playerResults/> here */}
        </div>
    )

}