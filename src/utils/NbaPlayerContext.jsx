import { createContext, useState } from "react";


export const NbaPlayerContext = createContext()

export const NbaPlayerProvider =({ children }) => {
    const [teamData, changeData] = useState(true) 

    // set up state for activePlayer1
    const [player1Stats, setPlayer1Stats] = useState(null)
    const [player1Load, setPlayer1Load] = useState(false)

    // need to set up same states for player2
    const [player2Stats, setPlayer2Stats] = useState(null)
    const [player2Load, setPlayer2Load] = useState(false)

    // playerSearch states
    // player1
    const [player1Exists, setPlayer1Exist] = useState(false)
    const [player1Results, changeP1Results] = useState('')

    // player2
    const [player2Exists, setPlayer2Exist] = useState(false)
    const [player2Results, changeP2Results] = useState('')

    return (
        <NbaPlayerContext.Provider
            value={{ 
                teamData, changeData,
                player1Stats, setPlayer1Stats,
                player1Load, setPlayer1Load,
                player2Stats, setPlayer2Stats,
                player2Load, setPlayer2Load,
                player1Exists, setPlayer1Exist,
                player1Results, changeP1Results,
                player2Exists, setPlayer2Exist,
                player2Results, changeP2Results
            }}
        >
            { children }
        </NbaPlayerContext.Provider>
    )

}