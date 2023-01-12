import React, { useState } from 'react'
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
} from 'chart.js';

import { Bar } from 'react-chartjs-2';
import { useDatabaseContext } from '../../context/DatabaseStats';
import { useAuth } from '../../context/AuthContext';
import { useBannerContext } from '../../context/BannerContext';

ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
)

const BarChart = () => {

    //const [ dbGame, setdbGame ] = useState("Reaction_Time")
    //write 
    const { useReadFromDatabase, gameResults } = useDatabaseContext()
    const { currentGame, setGame } = useBannerContext()
    const { currentUser } = useAuth()

    const email = currentUser.email
    var emailClear = `${email}`.replace("@", "").replace(".", "").trim()
    console.log(emailClear)
    // let emailClear = email.toString().replace("@", "").replace(".", "").trim()

    let finalDataUser = []
    let finalDataPro = []
    let maxAxis = 700
    console.log("OBECNA GRA: ", currentGame)
    useReadFromDatabase(currentGame.replace(" ", "_"), emailClear)


    console.log("stats: ", gameResults)

    if (currentGame == 'Reaction Time') {
        finalDataPro = [235,160]
  
    }
    else if (currentGame == 'Delay Ability'){
        finalDataPro = [248,175]
  
    }
    else if (currentGame == 'Switch Cost'){
        finalDataPro = [324,231]
      
    }

    finalDataUser = [gameResults.avg, gameResults.best]


    const data = {
        labels: ['AVG RESULT [ms]', 'BEST RESULT [ms]'],
        datasets: [
            {

                label: 'You',
                data: finalDataUser,
                backgroundColor: '#3F0190',
                borderColor: 'black',
                borderWidth: 1,
            },

            {
                label: 'Esport Pro Players',
                data: finalDataPro,
                backgroundColor: '#A2146F',
                borderColor: 'black',
                borderWidth: 1,
            }
        ]
    }

    const options = {
        plugins: {
            legend: {
                position: 'bottom',
                display: true,
                margin: "5rem"
            },


        },
        animation: {
            tension: {
                duration: 50,
                easing: 'easeInOutCirc',
                from: 1,
                to: 0,
                loop: true
            }
        },
        scales: {
            y: {
                min: 0,
                maxAxis: 900,
                beginAtZero: true
            }


        }
    }
    return (

        <Bar
            data={data}
            options={options}
        ></Bar>
    )
}

export default BarChart