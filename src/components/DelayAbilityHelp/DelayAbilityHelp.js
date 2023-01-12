import React from 'react'
import DelayAbilityHelpImg from "../../assets/img/delay_ability_help.svg"
import "./DelayAbilityHelp.scss"
import { Image } from 'react-bootstrap'

const DelayAbilityHelp = () => {

    return (
        <div className="component-da-help">
            <div className="component-da-help-inner">
                <div className="row-custom">
                    <div className="image-wrapper">
                        <Image src={DelayAbilityHelpImg}
                            fluid />
                    </div>
                    <div className="small-description-wrapper">
                        <p>
                            This task tests your ability to refrain from a reaction that you have already started to perform. The ability to refrain from reacting is an important skill in video games because it is a measure of accuracy - that is, the ability to make a move as quickly as possible, but at the same time precisely.
                        
                        </p>
                    </div>
                </div>
                <div className="description-wrapper">
                    <p>
                        After clicking on the START button, the first round begins. The mechanism randomizes a value in the range of 1000ms-2000ms and during this time it starts displaying colored squares (orange or purple), which are commonly called "traps". Their number is also random, but within the range of 1-5 (at least one colored square).
                        After each "trap", at a random time in the range of 1200ms-2500ms, another square is displayed. The user has to touch the screen when the red square is displayed. This will only happen after all the "pitfalls".
                        The game consists of 5 rounds this time. The game may fail when the user touches a screen that does not display a square other than red.
                    </p>

                </div>
            </div>
        </div>
    )
}

export default DelayAbilityHelp