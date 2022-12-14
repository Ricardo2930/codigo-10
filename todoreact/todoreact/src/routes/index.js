// Importar los componentes del REACT ROUTER DOM
import { BrowserRouter, Routes, Route} from "react-router-dom";
// Nuestra vista principal del proyecto esta en APP.JS la copiamos o pasamos a home/index.js
// Importar nuestras vistas
import { HomeView, ProfileView, TaskView, LoginView, SignUpView, TodoAppView, BooksView, CarsBooksView} from "../Pages";
import { MainLayout } from "../layouts";

// path => el nombre de la ruta / , / login / registro

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<HomeView />} />
                    <Route path="/books" element={<BooksView />} />
                    <Route path="/cars" element={<CarsBooksView />} />
                    <Route path="/TodoApp" element={<TodoAppView />} />
                    <Route path="/perfil" element={<ProfileView />} />
                    <Route path="/task/:id" element={<TaskView />} />
                </Route>
                <Route path="/login" element={<LoginView/>}/>
                <Route path="/signup" element={<SignUpView />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;