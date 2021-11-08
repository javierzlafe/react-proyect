import React, { useContext, useState } from 'react'
import { BsFillTrashFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { useHistory } from 'react-router'
import ProductoEnFila from './ProductoEnFila'

export const CartScreen = () => {
    const { goBack, push } = useHistory()
    const { carrito, vaciarCarrito, removeItem, calcularTotal} = useContext(CartContext);

    const carroMap =  carrito.map((prod) => (
        <tr key={prod.id} >
<ProductoEnFila id={prod.id} name={prod.name} price={prod.price} cantidad={prod.cantidad} stock={prod.stock} />
        </tr>
    ))


    return (
        <div className="container my-5">

            {
                carrito.length === 0
                    ? <>
                        <h2>No hay productos agregados</h2>
                        <Link to="/" className="btn btn-success">Comprar</Link>
                    </>
                    :
                    <>
                        <h2>Resumen de compra</h2>
                        <Link to="/cart" className="btn btn-success">Terminar mi compra</Link> {/*solo ejemplo no hace nada por ahora*/}
                        <hr />
                        <div>
                            <hr />
                            <div class="table-responsive">
                                <table class="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th>Nombre</th>
                                            <th>Código</th>
                                            <th>Precio</th>
                                            <th>Cantidad</th>
                                            <th>Total</th>
                                            <th>Quitar de lista</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                             carroMap   
                                        }
                                    </tbody>
                                </table>
                            </div>
                            <hr />
                        </div>
                        <hr />
                        <h3 className="my-3">Total: ${calcularTotal()}</h3>
                        <button
                            className="btn btn-outline-primary mx-4"
                            onClick={() => push("/")}
                        >
                            Seguir Comprando
                        </button> {/*vuelve al inicio*/}
                        <button
                            className="btn btn-danger"
                            onClick={vaciarCarrito}
                        >
                            Vaciar carrito
                        </button>
                    </>
            }

        </div>
    )
}


