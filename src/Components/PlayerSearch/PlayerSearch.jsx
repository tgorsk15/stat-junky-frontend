import nbaPage from "../../Pages/NbaPage/nbaPage.module.css"


export const PlayerSearch = () => {

    // call a function in the below that treiggers a data pull
    // is it possible to use same React query setup?  That won't help tho... need
    // to search for specifc players
    function handleSearch(e) {
        e.preventDefault()
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
        </div>
    )

}