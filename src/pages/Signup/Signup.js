import {Link, useNavigate} from "react-router-dom";
import React, { useContext, useState, useEffect, useRef } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import './Signup.scss';
import '../../components/Form/Form.scss';
import { useAuth } from '../../context/AuthContext';

export default function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const { signup, currentUser } = useAuth()
    const navigate = useNavigate()

    
    async function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !==
            passwordConfirmRef.current.value) {
                return setError('Passwords do not match')
            }

        try {
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            navigate("/")
        } catch {
            setError("Failed to create an account")
        }

        setLoading(false)
    }
    //navigate("/signup")
    return (
        <>
            <Card>
                <Card.Body>
                    <Form onSubmit={handleSubmit} className="form signup-form">
                        <h1>Sign Up</h1>
                        {currentUser && currentUser.email}
                        {error && <Alert variant="danger">{error}</Alert>}
                        <Form.Group className="form-group"  id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required placeholder='enter your email' />
                        </Form.Group>
                        <Form.Group className="form-group" id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required placeholder='min. 8 characters'/>
                        </Form.Group>
                        <Form.Group className="form-group" id="password-confirm">
                            <Form.Label>Password Confirmation</Form.Label>
                            <Form.Control type="password" ref={passwordConfirmRef} required placeholder="confirm password"/>
                        </Form.Group>
                        <Button disabled={loading} className="button submit" type="submit">
                            Sign Up
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Already have an account? <Link to = "/login"><span style={{ fontWeight: 'bold' }}>Log In</span></Link>
            </div>
        </>
    )
}
