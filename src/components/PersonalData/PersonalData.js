import React from 'react'
import { Image } from 'react-bootstrap'
import PersonalAvatar from '../../assets/img/Personal-avatar.png'
import "./PersonalData.scss"

const PersonalData = ({ customName, avatarURL, email }) => {

    return (

        <div className="component-personal">
            <div className="component-personal-inner">
                <div className="personal-avatar-wrapper">
                    <Image
                        src={avatarURL ? avatarURL : PersonalAvatar}
                    alt="avatar"
                    className='circular--landscape'
                
                    />
                </div>
                <div className="personal-info-wrapper">
                    <p>Logged as:</p>
                    <h2>{customName}</h2>
                    <h3>{email}</h3>
                </div>
            </div>
        </div>

    )
}

export default PersonalData