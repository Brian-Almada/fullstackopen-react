import { useState } from 'react'

const Display = (props) => {
    return(
        <div>{props.counter}</div>
    )
}

const Button = (props) => {
    return(
        <button onClick={props.handleClick}>
            {props.text}
        </button>
    )
}

const Contador = () => {

    const [counter, setCounter] = useState(0)
    const counterPlus = () => setCounter(counter + 1)
    const counterDecreace = () => setCounter(counter - 1)

    const backToZero = () => setCounter(0)

    return (
        <div>
            <Display counter = {counter} />
            <Button
                handleClick={counterPlus}
                text = 'plus'
            />
            <Button
                handleClick={counterDecreace}
                text = 'rest'
            />
            <Button
                handleClick={backToZero}
                text = 'zero'
            />
        </div>
    )

}

export default Contador