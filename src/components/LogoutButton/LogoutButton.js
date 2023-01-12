import React from 'react'
import { Button, Image } from 'react-bootstrap'
import LogoutIcon from '../../assets/img/icons/Logout-icon.png'
import {useNavigate} from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import './LogoutButton.scss'

const LogoutButton = () => {

    const navigate = useNavigate()
    const {logout} = useAuth()

    async function handleLogout() {

        try {
            await logout()
            navigate("/login")

        } catch {
            console.log("failed to logout")
        }

    }

    return (

        <Button className='logout-button' onClick={handleLogout}
        style={{border: "0px", padding: "0", width:'2.3rem'}}>
            <Image
                src={LogoutIcon} />
        </Button>

    )
}

export default LogoutButton;