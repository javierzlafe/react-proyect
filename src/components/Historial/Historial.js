
import React from 'react'
import { useHistory } from 'react-router'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'
import {Card, Button} from 'react-bootstrap'

export default function Historial( ){
    const {goBack, push} = useHistory()
    return (
        <div className="container">
        <div className="row">    
        <div class="col-12">
        <div>
        <h1 class="col-6">Compras Realizadas</h1>
       
        <button
                        className="btn btn-outline-primary mx-4"
                        onClick={()=>push("/")}
                        >Seguir Comprando
        </button> {/*vuelve al inicio*/}
        <button
                            className="btn btn-danger"
                            onClick={()=>push("/")}
                        >
                            Eliminar Historial
        </button> {/*solo ejemplo no hace nada por ahora --- va a inicio para que no de error*/}
        </div>
        <h2>Cliente: Nombre</h2>
            <div  class="alert">
            </div>
          
            <div class="table-responsive">
                <table class="table table-bordered" Style="text-align: center">
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Fecha</th>
                        <th>Productos</th>
                        <th>Total</th>
                        <th>Detalle de Compra</th>
                        
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td><h4>Compras.Id</h4></td>
                        <td><h4>Compras.fechaYHora</h4></td>
                        <td><h4>Compras.cantProducto</h4></td>
                        <td><h4>Compras.$total</h4></td>
                        <td>
                                         <Link to={"/detalle"}>
                                         <Button variant="primary">Ver</Button>
                                         </Link>
   
                        </td>
                    </tr>
                    </tbody>
                    </table>
                </div>
        </div>
    </div>
    </div>
   
    )
        
}