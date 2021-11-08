import React from 'react'
import { useHistory } from 'react-router'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'
import {Card, Button} from 'react-bootstrap'

export default function Detalle( ){
    const {goBack, push} = useHistory()
    return (
        <div className="container">
        <div className="row">    
        <div class="col-12">
        <div>
        <h1 class="col-6">Detalle de Compra</h1>
        <button 
                className="btn btn-primary"
                onClick={() => goBack()}
            >
                Volver
        </button>
        
        </div>
        <hr/>
        <h2>Cliente: Nombre</h2>
        <hr/>
        <h3>Total: $Monto</h3>
            <div  class="alert">
            </div>
          
            <div class="table-responsive">
                <table className="table table-bordered" Style="text-align: center">
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Cantidad</th>
                        <th>SubTotal</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td><h4>Prod.Id</h4></td>
                        <td><h4>Prod.Nombre</h4></td>
                        <td><h4>Prod.Cant</h4></td>
                        <td><h4>Prod.total</h4></td>
                    </tr>
                    </tbody>
                    </table>
                    <hr/>
                </div>
        </div>
    </div>
    </div>
   
    )
        
}