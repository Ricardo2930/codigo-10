
import { useState } from "react";

import './App.css';
import Userinformation from "./components/UserInformation";

import search1 from "./assets/icons/search_1.png";
import sun from "./assets/icons/sun.png";


/* Un COMPONENTE es un cloque de vista el cual combina html y js. En react siempre veremos una funcion que regrese html*/
/* Comando para crear REACT --- npx create-react-app + (nombre del proyecto) --- crea un proyecto para hacer react desde cero, descarga paqutes de internet necesarias para poder empezar en react*/
/* ejecuto un proyeco --- npm start ... actuva mi servidor local en mi navegador abre el puerto 3000... en app.js es un componente*/
function App() {
  const [inputText, setInputText] = useState("");

  const [user, setUser] = useState (null);


  function handleInputChange (event) {
    setInputText (event.target.value);
  }

  async function searchUser () {
    try {
      const response = await fetch (`https://api.github.com/users/${inputText}`);
      const data = await response.json();
      setUser(data);
    }
    catch (error) {
      console.log("Error",error);
    }
  }

   
  return (
    <div className="container">
      
      <div className="titulo">
        <h4 className="title">devfinder</h4>
        <button className="btn">
          LIGHT <img width="15px" src={sun} alt="" />
        </button>
      </div>

      
      <div className="buscador">
        <div className="busqueda">
          <img width="15px" src={search1} alt="" />
          <input
            value={inputText}
            onChange={handleInputChange}
            className="input"
            type="text"
            placeholder="Search GitHub username..."
          />
        </div>
        <div>
          <button className="search" onClick={searchUser}>Search</button>
        </div>
      </div>

      {/* aca podemos hacer una validacion donde digamos que el div que sigue exista siempre y cuando user tengo datos */}
      {user && <Userinformation user={user} />}
    </div>
  );
}

export default App;
