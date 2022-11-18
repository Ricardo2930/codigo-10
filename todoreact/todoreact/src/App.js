import { AuthProvider } from "./context/AuthContext";
import { BookProvider } from "./context/BookContext";
import Router from "./routes";

// <div className="container my-5"> es margin button de 5em
function App() {
  return (
    
      <AuthProvider>
          <BookProvider>
              <Router />
          </BookProvider>
      </AuthProvider>
    
  );
}

export default App;