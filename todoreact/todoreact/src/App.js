import { AuthProvider } from "./context/AuthContext";
import Router from "./routes";

// <div className="container my-5"> es margin button de 5em
function App() {
  return (
    
      <AuthProvider>
      <Router />
      </AuthProvider>
    
  );
}

export default App;