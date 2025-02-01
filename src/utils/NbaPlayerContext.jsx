import { createContext, useState } from "react";


export const NbaPlayerContext = createContext()

export const NbaPlayerProvider =({ children }) => {
    const [teamData, changeData] = useState(true) 
    const [isLoading, setLoading] = useState(false)

    // set up state for activePlayer1
    const [player1Stats, setPlayer1Stats] = useState(null)
    const [player1Load, setPlayer1Load] = useState(false)
    // still need to bring up player1 state, which will contain player gen info

    // need to set up same states for player2


    // playerSearch states
    const [resultsExist, setResults] = useState(false)
    const [results, changeResults] = useState('')

    // LEFT OFF HERE:
    // start commenting out states in Components... try to get context Provider 
    // to work... need to wrap NBAPage in Context first


    return (
        <NbaPlayerContext.Provider
            value={{ 
                teamData, changeData,
                isLoading, setLoading,
                player1Stats, setPlayer1Stats,
                player1Load, setPlayer1Load,
                resultsExist, setResults,
                results, changeResults
            }}
        >
            { children }
        </NbaPlayerContext.Provider>
    )

}