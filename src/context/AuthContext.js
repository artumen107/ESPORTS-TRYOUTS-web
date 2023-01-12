import React, { useContext, useState, useEffect } from 'react'
import { auth } from '../data/firebase'

import { db } from '../data/firebase'
import { ref, onValue } from 'firebase/database';

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {

    const [currentUser, setCurrentUser] = useState(true)
    const [userProfile, setUserProfile] = useState("")
    

    let emailUser = ""
    let emailClear = ""

    
        if (currentUser) {
            emailUser = currentUser.email
            emailClear = `${emailUser}`.replace("@", "").replace(".", "").trim()
        }
 

    // const imageListRef = storageRef(storage, `Users/${currentUser.email}`.replace("@", "").replace(".", "").trim())


    function useGetUserProfile() {

        useEffect(() => {
            onValue(ref(db, `Users/${currentUser.email}`.replace("@", "").replace(".", "").trim()), snapshot => {

                const data = snapshot.val();

                if (data !== null) {
                    setUserProfile(data.custom_name)
                    console.log(data.custom_name)
                }
                else if (data == null) {
                    console.log("NIE WYKRYWA DANYCH!")
                }
                else {
                    console.log("INNY BŁĄD")
                }
            })
        }, [emailClear]);
    }

   

    // funkcja się nie eksportuje, więc prawdopodobnie dlatego nie działa
    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password)
    }
    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
    }

    function logout() {
        return auth.signOut()
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
        })

        return unsubscribe
    }, [])


    const value = {
        currentUser,
        signup,
        login,
        logout,
        useGetUserProfile,
        userProfile,

    }
    return (

        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
