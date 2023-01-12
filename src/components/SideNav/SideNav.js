import React, { useState } from 'react'
import {Link, NavLink} from 'react-router-dom'
import LogoutButton from '../LogoutButton/LogoutButton'
import "./SideNav.scss"

const SideNav = () => {

    return (
        
            <div className="component-sideNav">
                <div className="component-sideNav-inner">
                    <ul>
                        <li><NavLink activeclassname="active" to="">Results</NavLink></li>
                        <li><NavLink activeclassname="active" to="/Statistics">Statistics</NavLink></li>
                        <li><NavLink activeclassname="active" to="/Tasks">Tasks</NavLink></li>
                    </ul>
                    <LogoutButton/>
                </div>
            </div>
        
    )
}

export default SideNav