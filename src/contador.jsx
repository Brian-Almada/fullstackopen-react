import { useState } from 'react'

const Contador = () => {

    const [counter, setCounter] = useState(0)
    const counterPlus = () => {setCounter(counter + 1)}
    const backToZero = () => {setCounter(0)}

    return (
        <div>
            <div>{counter}</div>
            <button onClick={counterPlus}>
                plus
            </button>

            <button onClick={backToZero}>
                zero
            </button>
        </div>
    )

}

export default Contador