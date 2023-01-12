import React, { useState } from 'react'
import useExternalScripts from "../../hooks/useExternalScripts"
import './Results.scss'
import BarChart from "./BarChart"


// const data = [
//     { argument: 1, value: 10 },
//     { argument: 2, value: 20 },
//     { argument: 3, value: 30 },
//   ];

const Results = () => {

    // const [chartData, setChartData] = useState([{ argument: 1, value: 10 }])

    
  
    return (
        <div className='component-subpage-results'>
            <div className='component-subpage-results-inner'>
                <BarChart/>
                
            </div>
        </div>
    )


}


export default Results;