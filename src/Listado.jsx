import React from "react";

const jsonNames = [
    {
        id: 1,
        name: 'John'
    },
    {
        id: 2,
        name: 'Jane'
    },
    {
        id: 3,
        name: 'Mark'
    }
]

const Listado = () => {
    return (
        <div>
            <h1>Listado</h1>
            {jsonNames.map((value, index) =>{
                return (
                    <div>
                        <p>{value.name}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Listado