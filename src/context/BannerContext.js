import React, { useContext, createContext, useState } from 'react'

const BannerContext = createContext()

export function useBannerContext() {
    return useContext(BannerContext)
}

export const BannerContextProvider = ({ children }) => {

    const [currentGame, setGame] = useState("Reaction Time");


    const value = {
        currentGame,
        setGame
    }


    return (
        <BannerContext.Provider value={value}>
            {children}
        </BannerContext.Provider>
    )


}

export default BannerContextProvider