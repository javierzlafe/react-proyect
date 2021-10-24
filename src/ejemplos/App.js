// import logo from './logo.svg';
import './App.css';
import { MiComponente } from './MiComponente';
import { saludar } from './funciones'

function App() {

  const styles = {
    fontSize: "40px",
    color: "green"
  }

  const titulo = "Hola Coders! Bienvenidos a React JS"

  
  return (
    <div className="App">

      <h2 
        onClick={saludar}
        className="titulo" 
        style={styles}>
          {titulo}
      </h2>

      <hr/>

      <img src="" alt=""/>

      <MiComponente/>
    </div>
  );
}

export default App;
