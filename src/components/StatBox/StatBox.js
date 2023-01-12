import React from 'react'
import "./StatBox.scss"

const StatBox = ({ headerText, mainText, className, time }) => {

    //const { headerText = "Default text" } = this.props.headerText
    // const { mainText = "Default main" } = this.props.mainText

    return (
        <div className='component-statbox'>
            <div className='component-statbox-inner'>
                <div className='statbox-header '>
                    <h5>{headerText}</h5>
                </div>
                <div className={'statbox-main ' + className}>
                    <p>{mainText}</p>
                    {time && <p><span style={{ fontSize: "2rem" }}>ms</span></p>}

                </div>
            </div>
        </div>
    )
}

export default StatBox