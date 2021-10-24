import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { UIContext } from '../../context/UIContext'
import { pedirProductos } from '../../helpers/pedirProductos'
import { ItemDetail } from './ItemDetail'

export const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
    
    const {loading, setLoading} = useContext(UIContext)

    const {itemId} = useParams()

    useEffect(()=>{
        setLoading(true)

        pedirProductos()
            .then( res => {
                setItem( res.find( prod => prod.id === Number(itemId)) )
            })
            .finally(()=> {
                setLoading(false)
            })

    }, [itemId, setLoading])

    return (
        <div>
            {
                loading ? <h2>Cargando...</h2>
                : <ItemDetail {...item}/>
            }
        </div>
    )
}
