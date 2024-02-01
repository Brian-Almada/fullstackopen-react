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
    const mapeador = () => {
        return jsonNames.map((value, index) =>{
            return (
                <div>
                    <p>{value.name}</p>
                </div>
            )
        })
    }
    return (
        <div>
            <h1>Listado</h1>
            {mapeador()}
        </div>
    )
}

export default Listado