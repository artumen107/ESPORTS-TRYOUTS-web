import React, { useEffect } from 'react'
import { Route, useNavigate, Navigate } from 'react-router-dom'
import { useAuth } from "../../context/AuthContext"
import ProfilePage from "../../pages/ProfilePage/ProfilePage"
import LoginPage from "../../pages/LoginPage/LoginPage"


const PrivateRoute = () => {
  const { currentUser } = useAuth()


  return currentUser ? <ProfilePage />: <><LoginPage /><Navigate to="/login" />

  </>
}

export default PrivateRoute

