import { useState } from "react";
import "./App.css";
import LoginForm from "./components/LoginFrom";
import FirebaseAuthService from "./FirebaseAuthService";

function App() {
  const [user, setUser] = useState(null);

  FirebaseAuthService.subcribeToAuthChanse(setUser);

  return (
    <div className="App">
      <div className="title-row">
        <h1 className="title">Firebase Recipes</h1>
        <LoginForm existinUser={user}></LoginForm>
      </div>
    </div>
  );
}

export default App;
