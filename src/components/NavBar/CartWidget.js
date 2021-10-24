import React, { useContext } from 'react'
import {FaShoppingCart} from 'react-icons/fa'
import { CartContext } from '../../context/CartContext'

export const CartWidget = () => {
    
    const { calcularCantidad } = useContext(CartContext)

    return (
        <div>
            <FaShoppingCart className="widget"/>
            <span>{calcularCantidad()}</span>
        </div>
    )
}
