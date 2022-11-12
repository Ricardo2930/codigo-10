import { createContext, useState } from "react";
import { getUsers } from "../services";
import { UserModel} from "../models/UserModel";



export const AuthContext = createContext();

// Crear un Provider: Este provider a proveer la variables y funciones
// que creemos
export const AuthProvider = (props) => {
  // La palabra children hace referencia a los components hijo
  // y este children viaja por props
  const { children } = props;

  const userDB = JSON.parse(localStorage.getItem("user")) || null;
	let userModel = null;
	if (userDB) {
		userModel = new UserModel(
			userDB.name,
			userDB.lastName,
			userDB.email,
			userDB.pass,
			userDB.imageProfile,
			userDB.createdAt,
			userDB.id
		);
	}

	const [user, setUser] = useState(userModel ?? {});

	async function login(email, password) {
		// Traemos a TODOS los usuarios de mockapi:
		const usersDB = await getUsers();
		// Buscamos dentro de usersDB, el usuario con el email y password:
		let user = null;
		user = usersDB.find((userDB) => {
			if (userDB.email === email && userDB.pass === password)
				return new UserModel(
					userDB.name,
					userDB.lastName,
					userDB.email,
					userDB.pass,
					userDB.imageProfile,
					userDB.createdAt,
					userDB.id
				);
		});
		if (!user) return false;
		localStorage.setItem("user", JSON.stringify(user));
		setUser(user);
		return true;
	}

  function logout() {
    localStorage.clear();
    setUser({});
    window.location.href = "/login";
  }

  // funcion para validar si la session existe
  function isAuth() {
    return Object.entries(user).length !== 0;
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        isAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
