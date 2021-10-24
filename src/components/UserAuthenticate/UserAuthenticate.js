import { useContext } from "react";
import { UserAuthContext } from "../../context/UserAuthContext";
import '../UserAuthenticate/UserAutenticate.scss';


export const UserAuthenticate = () => {


    const {setIsAuthenticated} = useContext(UserAuthContext);

    const handlesubmit = () => {
        setIsAuthenticated(true);
    }
    return (
    
    <>

        <div className="container">
            <br />
            <h2 className="loguin">Por favor logueate.</h2>
            <hr/>
            <br />
            <br />

            <div>
                <button onClick={handlesubmit} className="btn btn-primary boton-ingresar"> ingresar </button>
            </div>
        </div>
    </>
    );
}