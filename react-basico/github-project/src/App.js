import logo from './logo.svg';
import './App.css';
import Header from "./components/header";
/* Un COMPONENTE es un cloque de vista el cual combina html y js. En react siempre veremos una funcion que regrese html*/
/* Comando para crear REACT --- npx create-react-app + (nombre del proyecto) --- crea un proyecto para hacer react desde cero, descarga paqutes de internet necesarias para poder empezar en react*/
/* ejecuto un proyeco --- npm start ... actuva mi servidor local en mi navegador abre el puerto 3000... en app.js es un componente*/
function App() {

  function saludar () {
    console.log ("Hola Mundo");
  }

  // header es un componente y lo llevamos a App.js como etiqueta 
  return (
    <div className="container">
      
      <div className="titulo">
        <h4 className="title">devfinder</h4>
        <button className="btn">
          LIGHT <img width="15px" src="./image/sun.png" alt="" />
        </button>
      </div>

      
      <div className="buscador">
        <div className="busqueda">
          <img width="15px" src="./image/search_1.png" alt="" />
          <input
            className="input"
            type="text"
            placeholder="Search GitHub username..."
          />
        </div>
        <div>
          <button className="search">Search</button>
        </div>
      </div>

      
      <div className="information-container">
        <div className="foto">
          <img
            width="100"
            src="./image/IMG_20180202_070622.jpg"
            alt=""
          />
        </div>

        <div className="description-container">
          <div className="user-date-container">
            <h4>The Octocat</h4>
            <p>Joined 25 Jan 2011</p>
          </div>
          <div className="user-bio-container">
            <p>@octocat</p>
            <p>this profile has no bio</p>
          </div>
          <div className="card-information">
            <div>
              <h6>Repos</h6>
              <h4>8</h4>
            </div>
            <div className="div">
              <h6>Followers</h6>
              <h4>3938</h4>
            </div>
            <div>
              <h6>Following</h6>
              <h4>9</h4>
            </div>
          </div>

          <div className="info-container">
            <div>
              <p>
                <img width="15" src="./image/pin.png" alt="" /> San Franciso
              </p>
              <p>
                <img width="15" src="./image/twitter.png" alt="" /> Not Avible
              </p>
            </div>
            <div>
              <p>
                <img width="15" src="./image/link.png" alt="" />
                https://github.blog
              </p>
              <p><img width="15" src="./image/hotel.png" alt="" /> @github</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
