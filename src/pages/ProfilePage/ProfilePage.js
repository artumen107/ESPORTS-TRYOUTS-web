import React, { useState } from 'react'
import { Card, Button, Alert, Container } from 'react-bootstrap'
import { useAuth } from '../../context/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
import "./ProfilePage.scss"
import MainFragment from '../../components/MainFragment/Main'
import SideNav from '../../components/SideNav/SideNav'
import TopBanner from '../../components/TopBanner/TopBanner'
import { useBannerContext } from '../../context/BannerContext'

export default function Profile() {
    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
   
    const navigate = useNavigate()

    async function handleLogout() {
        setError('')
        try {
            await logout()
            navigate("/login")

        } catch {
            setError('Failed to logout')
        }

    }
    return (

        <Container className="d-flex align-items-center
        justify-content-center">
            <div className='profilepage-container'>
                <div className='profilepage-inner'>
                    <div className='top-banner-container'>
                        <TopBanner />
                    </div>
                    <div className='profile-main-wrapper'>
                        <div className="side-block">
                            <div className="sidenav-wrapper">
                                <SideNav />
                            </div>
                        </div>
                        <div className='main-block'>
                            <MainFragment fragmentBar={true} />
                        </div>

                        {/* <Button variant="link" onClick={handleLogout}>Log Out</Button> */}
                    </div>


                </div>
            </div>
        </Container>


        /* <Card>
            <Card.Body>
                <h1>Profile</h1>
                {error && <Alert variant="danger">{error}</Alert>}
                <strong>Email: </strong> {currentUser && currentUser.email}
                <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
                    Update profile
                </Link>
            </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
            <Button variant="link" onClick={handleLogout}>Log Out</Button>

        </div> */

    )
}
