import React from 'react'
import './Statistics.scss'
import StatBox from '../../components/StatBox/StatBox'
import { useBannerContext } from '../../context/BannerContext'
import { useDatabaseContext } from '../../context/DatabaseStats';
import { useAuth } from '../../context/AuthContext';

const Statistics = () => {

    const { currentGame, setGame } = useBannerContext()
    const { useReadFromDatabase, gameResults } = useDatabaseContext()
    const { currentUser } = useAuth()

    const email = currentUser.email
    var emailClear = `${email}`.replace("@", "").replace(".", "").trim()

    useReadFromDatabase(currentGame.replace(" ", "_"), emailClear)

    let games_played = gameResults.total_games
    let best_score = gameResults.best

    let level = 1
    let rank = "NOOB"
    let quoteText = "Good, braah!"

    if (games_played >= 0 && games_played < 3) {
        level = 1
    }
    else if (games_played >= 3 && games_played < 7) {
        level = 2
    }
    else if (games_played >= 7 && games_played < 12) {
        level = 3
    }
    else if (games_played >= 12 && games_played < 18) {
        level = 4
    }
    else if (games_played >= 18 && games_played < 25) {
        level = 5
    }
    else if (games_played >= 25 && games_played < 33) {
        level = 6
    }
    else if (games_played >= 33 && games_played < 42) {
        level = 7
    }
    else if (games_played >= 42 && games_played < 52) {
        level = 8
    }
    else if (games_played >= 52 && games_played < 63) {
        level = 9
    }
    else if (games_played >= 63 && games_played < 75) {
        level = 10
    }
    else if (games_played >= 75 && games_played < 88) {
        level = 11
    }
    else if (games_played >= 88 && games_played < 102) {
        level = 12
    }
    else if (games_played >= 102 && games_played < 117) {
        level = 13
    }
    else if (games_played >= 117 && games_played < 133) {
        level = 14
    }
    else if (games_played >= 133 && games_played < 150) {
        level = 15
    }
    else if (games_played >= 150 && games_played < 168) {
        level = 16
    }
    else if (games_played >= 168 && games_played < 187) {
        level = 17
    }
    else if (games_played >= 187 && games_played < 207) {
        level = 18
    }
    else if (games_played >= 207 && games_played < 228) {
        level = 19
    }
    else if (games_played >= 228) {
        level = 20
    }

    if (best_score >= 401) {
        rank = "NOOB"
        quoteText = "Keep working. It is hard work what makes you better."
    }
    else if (best_score <= 400 && best_score >= 351) {
        rank = "BEGINNER"
        quoteText = "You exactly know that it is just the beginning."
    }
    else if (best_score <= 350 && best_score >= 326) {
        rank = "AMATEUR"
        quoteText = "Being amateur is not for you. You want more."
    }
    else if (best_score <= 325 && best_score >= 301) {
        rank = "AVERAGE"
        quoteText = "Who wants to be average? Keep pushing forward."
    }
    else if (best_score <= 300 && best_score >= 276) {
        rank = "DECENT"
        quoteText = "Finally. You might be glad with your results."
    }
    else if (best_score <= 275 && best_score >= 251) {
        rank = "ADVANCED"
        quoteText = "Do you aspire to be PRO? Good job!"
    }
    else if (best_score <= 250 && best_score >= 226) {
        rank = "SEMI-PRO"
        quoteText = "Any team want's to contract him? Amazing score."
    }
    else if (best_score <= 225 && best_score >= 201) {
        rank = "PRO"
        quoteText = "Absolutely fantastic score. You must be playing PRO."
    }
    else if (best_score <= 200) {
        rank = "GODLIKE"
        quoteText = "WORLD CLASS LEVEL. YOU ACHIEVED THE HIGHEST RANK!"
    }

    

    return (
        <div className='component-subpage-statistics'>
            <div className='component-subpage-statistics-inner'>
                <div className='cards-container'>
                    <div className='row-custom'>
                        <div className='col-custom'>
                            <StatBox headerText="Games played" mainText={games_played} className='purple' />
                        </div>
                        <div className='col-custom'>
                            <StatBox className='pink' headerText="Level" mainText={level} />
                        </div>
                    </div>
                    <div className='row-custom'>
                        <div className='col-custom'>

                            <StatBox headerText="Best score" mainText={best_score} className='purple' time={true} />
                        </div>
                        <div className='col-custom'>
                            <StatBox className='pink small' headerText="Rank" mainText={rank} />
                        </div>

                    </div>
                </div>

                <div className='quote-container'>
                    <div className='quote-wrapper'>
                        <p>{quoteText}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Statistics;