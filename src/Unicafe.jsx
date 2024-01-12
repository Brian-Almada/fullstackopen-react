import { useState } from "react";

const display = (props) => {
    props.good
    props.neutral
    props.bad
}


const Unicafe = () => {

    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    return (
        <>
        <h1>give feedback</h1>
        <button onClick={() => {setGood + 1}}>good</button>
        <button onClick={() => {setNeutral + 1}}>neutral</button>
        <button onClick={() => {setBad + 1}}>bad</button>

        <h1>statistics</h1>
            <p>
                {display.props.good}
                {display.props.neutral}
                {display.props.bad}
            </p>
            <ul>
                <li>good</li>
                <li>neutral</li>
                <li>bad</li>
            </ul>
        </>
    )

}

export default Unicafe