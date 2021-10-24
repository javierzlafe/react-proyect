import React, { useEffect, useState } from 'react'

export const ClickTrackerDos = () => {

    const [coord, setCoord] = useState({x: 0, y: 0})

    const handleClick = (e) => {
        console.log(e)
        setCoord({
            x: e.x,
            y: e.y
        })
    }

    useEffect( () => {
        // montaje y posibles actualizaciones
        window.addEventListener('click', handleClick)
        // window.addEventListener('mousemove', handleClick)

        // desmontaje
        return () => {
            window.removeEventListener('click', handleClick)
            // window.removeEventListener('mousemove', handleClick)
        }
    }, [])

    return (
        <div 
            onClick={(e) => console.log(e.nativeEvent)}
            className="container"
        >
            
            <hr/>
            <h3>X: {coord.x}</h3>

            <h3>Y: {coord.y}</h3>
        </div>
    )
}
