import React, { useContext, useState, useEffect, useRef } from 'react'
import { Link, Route, Routes, useHistory, useNavigate } from "react-router-dom"
import { Form, Button, Card, Alert } from 'react-bootstrap'
import './Login.scss'
import '../../components/Form/Form.scss'
import { useAuth } from '../../context/AuthContext'

export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const { login, currentUser } = useAuth()
    let navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            navigate("/")
        } catch {
            setError("Failed to login")
        }

        setLoading(false)
    }

    return (

        <>
            <div className='component-login'>

                <Form onSubmit={handleSubmit} className="form login-form">
                    <h1>Login</h1>
                    <p>Sign in with your data that you entered during your registration on mobile app.</p>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form.Group className="form-group" id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" ref={emailRef} required placeholder='enter your email' />
                    </Form.Group>
                    <Form.Group className="form-group" id="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" ref={passwordRef} required placeholder='min. 8 characters' />
                    </Form.Group>
                    <Button disabled={loading} className="button submit" type="submit">
                        LOGIN
                    </Button>
                </Form>

                <div className="w-100 text-center mt-2">
                    Need an account? <Link to="/signup"><span style={{ fontWeight: 'bold' }}>Sign Up</span></Link>
                </div>
            </div>
        </>
    )
}
