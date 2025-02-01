import { useContext } from "react";
import { NbaPlayerContext } from "./NbaPlayerContext";

export const usePlayer = () => {
    const context = useContext(NbaPlayerContext)
    if (context === undefined) {
        throw new Error('usePlayer must be used within a NbaPlayerProvider')
    }
    return context
}