import React from 'react'
import ReactionTimeHelpImg from "../../assets/img/reaction_time_help.svg"
import "./ReactionTimeHelp.scss"
import { Image } from 'react-bootstrap'

const ReactionTimeHelp = () => {
    return (
        <div className="component-rt-help">
            <div className="component-rt-help-inner">
                <div className="row-custom">
                    <div className="image-wrapper">
                        <Image src={ReactionTimeHelpImg}
                            fluid />
                    </div>
                    <div className="small-description-wrapper">
                        <p>
                            In many first-person shooter games, reaction speed is the primary factor in determining player fitness. In the "Reaction Time" task, it is checked how quickly the user can see the stimulus on the screen and react to it. The values that describe the final result are the average and the best response time in milliseconds.
                        </p>
                    </div>
                </div>
                <div className="description-wrapper">
                    <p>
                        After clicking on the START button, the first round begins. The mechanism, at a random time in the range of 1500ms - 5000ms, will replace the green square with the red one. From this moment, the user\'s reaction time for the given round will start counting. The contestant touches the central area of the screen as quickly as possible when he sees a red figure.
                        Then the reaction time is saved and the next round begins.
                        There are 10 such rounds. The user may not complete the game successfully. This happens when the player touches the screen displaying a green square. The game stops and needs to be restarted.
                    </p>

                </div>
            </div>
        </div>
    )
}

export default ReactionTimeHelp