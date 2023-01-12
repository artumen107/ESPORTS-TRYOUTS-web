import React from 'react';
import Login from '../../components/Login/Login';
import Image from 'react-bootstrap/Image';
import './LoginPage.scss';
import loginPageBanner from '../../assets/img/Loginpage-banner.png'
import logotype from '../../assets/img/Logotype.png'
import { Card } from 'react-bootstrap';
import { Container } from 'react-bootstrap';

const LoginPage = () => {

    return (
        <Container className="d-flex align-items-center
        justify-content-center">
            <div className='loginpage-container'>
                <div className='loginpage-inner'>

                    <div className='component-login-wrapper'>
                        <div className='logo-container'>
                            <Image
                                src=
                                {logotype}
                                alt="..."
                                style={{width:"75%"}}
                            />
                        </div>
                        <Login />
                    </div>
                    <div className='image-container'>
                        <Image
                            src=
                            {loginPageBanner}
                            alt="..."
                            style={{ flexGrow: 1, objectFit: 'cover' }}
                        />
                    </div>
                </div>
            </div>
        </Container>
    )

}

export default LoginPage