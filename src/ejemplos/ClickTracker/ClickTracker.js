import React, { useState } from 'react'

export const ClickTracker = () => {

    const [counter, setCounter] = useState(0)

    const aumentarContador = () => {
        setCounter( counter + 1 )
    }


    return (
        <div className="container">
            <button onClick={aumentarContador} className="btn btn-primary">
                Click me!
            </button>
            <hr/>
            <h3>Cantidad de clicks: {counter}</h3>

            <h3>FyH: {counter > 0 ? new Date().toLocaleString() : "No hay clicks aún"}</h3>
        </div>
    )
}
