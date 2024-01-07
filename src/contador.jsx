import { useState } from 'react'

const Display = ({counter}) => <div>{counter}</div>

const Button = (props) => {
    return(
        <button onClick={props.handleClick}>
            {props.text}
        </button>
    )
}

const Contador = () => {

    const [counter, setCounter] = useState(0)
    console.log('rendering with counter value', counter)
    const counterPlus = () => {
        console.log('increasing, value before', counter)
        setCounter(counter + 1)
    }
    const counterDecreace = () => {
        console.log('decreasing, value before', counter)
        setCounter(counter - 1)
    }
    const backToZero = () => {
        console.log('resetting to zero, value before', counter)
        setCounter(0)
    }

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