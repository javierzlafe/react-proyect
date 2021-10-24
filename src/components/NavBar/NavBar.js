import React from 'react'
import { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { UserAuthContext } from '../../context/UserAuthContext'
import { CartWidget } from './CartWidget'
import './NavBar.scss'




export const NavBar = ( {logo} ) => {


    const { isAuthenticated, setIsAuthenticated } = useContext(UserAuthContext);
    const handlesubmit = () => {
        setIsAuthenticated(false);
    }
    return (
        <header className="header">
            <h1>{logo}</h1>

            <div>
                <nav>
                    <NavLink activeClassName={'activeLink'} exact to="/">Inicio</NavLink>
                    <NavLink activeClassName={'activeLink'} exact to="/productos/remeras">Tecnologia</NavLink>
                    <NavLink activeClassName={'activeLink'} exact to="/productos/zapatos">Accesorios</NavLink>

                    <NavLink activeClassName={'activeLink'} exact to="/contacto">Contactos</NavLink>

                    <Link to="/cart"><CartWidget/></Link>
                    { !isAuthenticated || <button onClick={handlesubmit} > Salir</button> }
                    
                </nav>
            </div>
        </header>
    )
}

