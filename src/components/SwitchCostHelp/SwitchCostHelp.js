import React from 'react'
import SwitchCostHelpImg from "../../assets/img/switch_cost_help.svg"
import "./SwitchCostHelp.scss"
import { Image } from 'react-bootstrap'

const SwitchCostHelp = () => {

    return (
        <div className="component-sc-help">
            <div className="component-sc-help-inner">
                <div className="row-custom">
                    <div className="image-wrapper">
                        <Image src={SwitchCostHelpImg}
                            fluid
                            style={{objectFit: 'contain', width: 'auto'}} />
                    </div>
                    <div className="small-description-wrapper">
                        <p>
                            The exercise measures a trait called mental flexibility, which is the ability to switch between tasks without compromising performance. By comparing the results from "Reaction Time" to those obtained in the "Switch Cost" task, the user can see how much time it takes to react with several distractions that distort the logic of what he sees.

                        </p>
                    </div>
                </div>
                <div className="description-wrapper">
                    <p>
                        After clicking the START button, the first round begins and all the figures disappear from the screen. The system randomizes a value in the range of 1500ms - 5000ms and at this time displays a new layout. A square or rectangle appears in the center, composed of smaller quadrangles (squares or rectangles). Below, on the sides of the screen, you can see small figures that turn into buttons for answering. Their placement is also random. The user, after the arrangement of figures appears, must decide as soon as possible whether the pattern in the central point is a square or a rectangle and quickly find the answer on the screen. The game consists of 10 rounds. Ends before time if contestant answers wrong.
                    </p>

                </div>
            </div>
        </div>
    )
}

export default SwitchCostHelp