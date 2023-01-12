import React from 'react'
import './Tasks.scss'
import { Image } from 'react-bootstrap'
import DelayAbilityHelp from '../../components/DelayAbilityHelp/DelayAbilityHelp'
import SwitchCostHelp from '../../components/SwitchCostHelp/SwitchCostHelp'
import { useBannerContext } from '../../context/BannerContext'
import ReactionTimeHelp from '../../components/ReactionTimeHelp/ReactionTimeHelp'

const Tasks = () => {


    const { currentGame, setGame } = useBannerContext()

    return (
        <div className='component-subpage-tasks'>
            <div className='component-subpage-tasks-inner'>

                {(() => {
                    switch (currentGame) {
                        case "Reaction Time":
                            return (<ReactionTimeHelp />)
                        case "Delay Ability":
                            return (<DelayAbilityHelp />)
                        case "Switch Cost":
                            return (<SwitchCostHelp/>)
                        default:
                            return(null) 
                          
                    }
                })()}

            </div>
        </div>
    )
}

export default Tasks;