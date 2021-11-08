import React, { useContext, useState, useEffect } from 'react'
import { BsFillTrashFill } from 'react-icons/bs';
import { CartContext } from '../../context/CartContext'

const ProductoEnFila = ({name, id, price, cantidad, stock}) => {

const [counter, setCounter] = useState(cantidad)
const [initialValues, setValues]= useState({name: name, id: id, price: price, cantidad: cantidad, stock: stock})
    const {carrito, removeItem, setCarrito} = useContext(CartContext);


useEffect(() => {
    setValues({...initialValues, cantidad: counter})
    console.log(initialValues)
    setCarrito(carrito.map(producto =>{if(producto.id===initialValues.id){return initialValues}}))
   
}, [counter, initialValues.cantidad])

    return ( <> <td ><h4>{name}</h4></td>
<td><h4>{id}</h4></td>
<td><h4>{price}</h4></td>
<td><h4>{counter}</h4><button className="btn" onClick={() => {if(counter !== 1) {setCounter(counter - 1)} }}> restar </button> <button className="btn" onClick={() => { if(counter !== stock){ setCounter(counter+1)}}}> aumentar </button></td>
<td><h4>{price * counter}</h4></td>
<td>

<form >
<button className="btn btn-danger" onClick={() => removeItem(id)}>
<BsFillTrashFill />
</button>
</form>
</td> </>);
}
 
export default ProductoEnFila;