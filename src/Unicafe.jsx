import { useState } from "react";

const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>

const StatisticsLine = ({text, value}) => {
    <p>{text} {value}</p>

    return (
        <>
            <StatisticsLine text="good" value={good} />
            <StatisticsLine text="neutral" value={neutral}/>
            <StatisticsLine text="bad" value={bad} />
            <StatisticsLine text="all" value={all} />
            <StatisticsLine text="average" value={average} />
            <StatisticsLine text="positive" value={`${positive} %`} />
        </>
    )
}

const Statistics = ({good, neutral, bad}) => {

    const all = good + neutral + bad
    const average = (good - bad) / all
    const positive = good / all * 100

    if (all === 0) {
        return (
            <>
            <h1>statistics</h1>
            <p>No feedback given</p>
            </>
        )
    } else {
        return (
            <>
            <h1>statistics</h1>
            <h1>statistics</h1>
            <p>good {good}</p>
            <p>neutral {neutral}</p>
            <p>bad {bad}</p>
            <p>all {all}</p>
            <p>average {average}</p>
            <p>positive {positive} %</p>
            </>
        )
    }

}


const Unicafe = () => {

    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)



    return (
        <>
        <h1>give feedback</h1>
        <Button handleClick={() => setGood(good + 1)} text= 'good' />
        <Button handleClick={() => setNeutral(neutral + 1)} text= 'neutral' />
        <Button handleClick={() => setBad (bad + 1)} text= 'bad' />

        <Statistics good={good} neutral={neutral} bad={bad} />
        </>
    )

}

export default Unicafe