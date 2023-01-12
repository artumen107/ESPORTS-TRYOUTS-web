import React from 'react';
import Signup from '../../components/Signup/Signup';
import Image from 'react-bootstrap/Image';
import './SignupPage.scss';
import loginPageBanner from '../../assets/img/Loginpage-banner.png'
import { Card } from 'react-bootstrap';
import { Container } from 'react-bootstrap';

const SignupPage = () => {

    return (
        <Container className="d-flex align-items-center
        justify-content-center">
            <div className='signuppage-container'>
                <div className='signuppage-inner'>
                    <div className='component-signup-wrapper'>
                        <Signup />
                        
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

export default SignupPage