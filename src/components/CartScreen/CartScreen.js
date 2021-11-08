import React, { useContext } from 'react'
import { BsFillTrashFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { useHistory } from 'react-router'
 
export const CartScreen = () => {
    const {goBack, push} = useHistory()
    const {carrito, vaciarCarrito, removeItem, calcularTotal} = useContext(CartContext)
 
 
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
                        <hr/>
 
            {
            carrito.map( (prod) => (
             <div>         
                                   
            <div className="table-responsive">
            <table className="table table-bordered" Style="text-align: center">
                <thead>
                <tr>
                    <th><h4>Nombre</h4></th>
                    <th><h4>Código</h4></th>
                    <th><h4>Precio</h4></th>
                    <th><h4>Cantidad</h4></th>
                    <th><h4>Total</h4></th>
                    <th><h4>Quitar</h4></th>
                </tr>
                </thead>
                
                
               
                <tr>
                    <td><h5>{prod.name}</h5></td>
                    <td><h5>{prod.id}</h5></td>
                    <td><h5>{prod.price}</h5></td>
                    <td><h5>{prod.cantidad}</h5></td>
                    <td><h5>{prod.price * prod.cantidad}</h5></td>
                    <td>
                        <form >
                        <button className="btn btn-danger" onClick={() => removeItem(prod.id)}>
                                        <BsFillTrashFill/>
                                    </button>
                        </form>
                    </td>
                </tr>
               
             
               
                                      
               
                         
            
               
            </table>
        </div>
       
        </div>
                            ))
 
       
                        }
 
                        <hr/>
                        <h3 className="my-3">Total: ${calcularTotal()}</h3>
                        <button
                        className="btn btn-outline-primary mx-4"
                        onClick={()=>push("/")}
                        >Seguir Comprando
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
