import React, { useEffect } from 'react'
import { useNavigate, Navigate } from 'react-router-dom'
import { useAuth } from "../../context/AuthContext"
import Login from "../Login/Login"
import ProfilePage from "../../pages/ProfilePage/ProfilePage"
import LoginPage from "../../pages/LoginPage/LoginPage"

const PrivateRouteLogin = () => {

  const { currentUser } = useAuth()

  return currentUser ? <><ProfilePage /><Navigate to="/"/></>: <LoginPage />
 



}

export default PrivateRouteLogin

