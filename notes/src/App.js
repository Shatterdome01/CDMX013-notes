import { Routes, Route } from 'react-router-dom'
import Login from "./components/noAuth/Login.js";
import Main from "./components/Main.js"
import { useState } from "react";
import './App.css'


function App() {
  const [user, setUser] = useState(null);
  if (user === null) {
    return (
      <div>
        <Login setUser={setUser} />
      </div>
    );
  }
  return (
    <div>
      <Main />
    </div>
  );
}
export default App;
