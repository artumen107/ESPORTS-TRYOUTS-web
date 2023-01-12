import React, { useRef, useState } from 'react';
import "./FragmentBar.scss";
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import RTIcon from '../../assets/img/icons/Reaction-time-icon.svg';
import DAIcon from '../../assets/img/icons/Delay-ability-icon.svg';
import SCIcon from '../../assets/img/icons/Switch-cost-icon.svg';
import { BannerContextProvider, useBannerContext } from "../../context/BannerContext"

const FragmentBar = () => {

    const [isActiveRT, setIsActiveRT] = useState(true);
    const [isActiveSC, setIsActiveSC] = useState(false);
    const [isActiveDA, setIsActiveDA] = useState(false);
    const { currentGame, setGame } = useBannerContext()
    const headerRef = useRef()

    // stworzyć kolejny kontekst na fragmenty, żeby sprawdzać czy RT is active, powyżej ustawiać w kontekście

    const handleClickRT = () => {
        setIsActiveRT(true)
        setIsActiveSC(false)
        setIsActiveDA(false)
        headerRef.current.innerText = "Reaction Time"
        setGame("Reaction Time")
        
        console.log(currentGame)
        // or set to true
    }

    const handleClickSC = () => {
        setIsActiveRT(false)
        setIsActiveSC(true)
        setIsActiveDA(false)
        headerRef.current.innerText = "Switch Cost"
        setGame("Switch Cost")
        console.log(currentGame)
        // or set to true
    }

    const handleClickDA = () => {
        setIsActiveRT(false)
        setIsActiveSC(false)
        setIsActiveDA(true)
        headerRef.current.innerText = "Delay Ability"
        setGame("Delay Ability")
        console.log(currentGame)
        // or set to true
    }

    return (

            <div className='component-fragmentbar'>
                <div className='component-fragmentbar-inner'>
                    <div className='task-title'>
                        <h4 ref={headerRef}>
                            Reaction Time
                        </h4>
                    </div>
                    <div className='tasks-icons-menu'>
                        <div className='icon-container'
                            style={{ backgroundColor: isActiveRT ? '#D9D9D9' : '' }}
                            onClick={handleClickRT}>
                            <Image src={RTIcon} />
                        </div>

                        <div className='icon-container'
                            style={{ backgroundColor: isActiveSC ? '#D9D9D9' : '' }}
                            onClick={handleClickSC}>

                            <Image src={SCIcon} />

                        </div>
                        <div className='icon-container'
                            style={{ padding: '0.3rem', backgroundColor: isActiveDA ? '#D9D9D9' : '' }}
                            onClick={handleClickDA}>

                            <Image src={DAIcon} />

                        </div>
                    </div>
                </div>
            </div>
        
    )

}

export default FragmentBar