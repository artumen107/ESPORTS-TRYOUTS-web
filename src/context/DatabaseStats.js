import React, { useContext, createContext, useState, useEffect } from 'react'
import { db } from '../data/firebase'
import { ref, onValue } from 'firebase/database';

const DatabaseContext = createContext()

export function useDatabaseContext() {
    return useContext(DatabaseContext)
}

export const DatabaseContextProvider = ({ children }) => {

    // const [todo, setTodo] = useState("");
    const [gameResults, setGameResults] = useState({avg: 0, best: 0, date: "", time: "", total_games: 0});

    //read
    function useReadFromDatabase(game, emailClear) {
        console.log("FUNKCJA useReadFromDatabase wykonuje się z danymi: ", game, emailClear)
        useEffect(()=> {
            onValue(ref(db, `Users/${emailClear}/Best_Results/${game}`), snapshot => {
                console.log(`Users/${emailClear}/Best_Results/${game}`)
                
                const data = snapshot.val();
     
                if (data !== null) {
                        setGameResults(data)
                }
                else if (data == null) {
                    console.log("NIE WYKRYWA DANYCH!")
                }
                else {
                    console.log("INNY BŁĄD")
                }
            })
        },[game, emailClear]);
    }
    

    //write 
    
    // const writeToDatabase = () => {
    //     const uuid = uid()
    //     set(ref(db, `/${uuid}`), {
    //         todo: todo,
    //         uuid: uuid,
    //     }
    //     )
    //     console.log("TEST")
    // }

    const value = {
  
        // writeToDatabase,
        useReadFromDatabase,
        gameResults
    }


    return (
        <DatabaseContext.Provider value={value}>
            {children}
        </DatabaseContext.Provider>
    )


}

export default DatabaseContextProvider