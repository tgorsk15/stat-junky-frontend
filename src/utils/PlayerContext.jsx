import { createContext, useState } from "react";


export const PlayerContext = createContext()

export const PlayerProvider =({ children }) => {
    const [teamData, changeData] = useState(true) 
    const [isLoading, setLoading] = useState(false)

    // set up state for activePlayer1
    const [player1Stats, setPlayer1Stats] = useState(null)
    const [player1Load, setPlayer1Load] = useState(false)
    // still need to bring up player1 state, which will contain player gen info

    // need to set up same states for player2



    return (
        <PlayerContext.Provider
            value={{ 

            }}
        >
            { children }
        </PlayerContext.Provider>
    )

}