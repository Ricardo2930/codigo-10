// Importar los componentes del REACT ROUTER DOM
import { BrowserRouter, Routes, Route} from "react-router-dom";
// Nuestra vista principal del proyecto esta en APP.JS la copiamos o pasamos a home/index.js
// Importar nuestras vistas
import { HomeView, ProfileView, TaskView, LoginView } from "../Pages";

// path => el nombre de la ruta / , / login / registro

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeView/>}/>
                <Route path="/perfil" element={<ProfileView/>}/>
                <Route path="/task/:id" element={<TaskView />} />
                <Route path="/login" element={<LoginView/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;