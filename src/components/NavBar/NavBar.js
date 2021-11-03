
import React from 'react'
import { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { UserAuthContext } from '../../context/UserAuthContext'
import { CartWidget } from './CartWidget'
import './NavBar.scss'
import { CartContext } from '../../context/CartContext'
//import logo2 from './unLogo.png';



export const NavBar = ( {logo} ) => {

   const {vaciarCarrito} = useContext (CartContext);
    const { isAuthenticated, setIsAuthenticated} = useContext(UserAuthContext);
    const handlesubmit = () => {
        setIsAuthenticated(false);
        vaciarCarrito();

    }
    return (
        <header className="header" >
           {//<img src={logo2} className="logo2" align="center"></img>//
           }
            <h1>{logo}</h1>

            <div>
                <nav >
                    <NavLink activeClassName={'activeLink'} exact to="/">Inicio</NavLink>
                    <NavLink activeClassName={'activeLink'} exact to="/productos/tecnologia">Tecnologia</NavLink>
                    <NavLink activeClassName={'activeLink'} exact to="/productos/accesorios">Accesorios</NavLink>

                    <NavLink activeClassName={'activeLink'} exact to="/contacto">Historial</NavLink>

                    <Link to="/cart"><CartWidget/></Link>
                    { !isAuthenticated || <button className="botonSalir" onClick={handlesubmit}> Salir</button> }

                </nav>
            </div>
        </header>
    )
}