import React from 'react'
import {Card, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const Item = ( {id, name, price, img, description, category} ) => {

    // console.log(props)

    return (

        <Card style={{ width: '18rem' }} className="m-3">
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Card.Text>Precio: ${price}</Card.Text>
                <Card.Text>Categoria: {category}</Card.Text>

                <Link to={`/detail/${id}`}>
                    <Button variant="primary">Comprar</Button>
                </Link>
            </Card.Body>
        </Card>
    )
}
