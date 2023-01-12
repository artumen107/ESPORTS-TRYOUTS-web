import React, { useEffect } from 'react'
import { Route, useNavigate } from 'react-router-dom'
import { useAuth } from "../../context/AuthContext"
import Profile from "../../pages/ProfilePage/ProfilePage"
import SignupPage from "../../pages/SignupPage/SignupPage"

const PrivateRouteSignup = () => {
  const { currentUser } = useAuth()
  return currentUser ? <Profile /> : <SignupPage />
}

export default PrivateRouteSignup

