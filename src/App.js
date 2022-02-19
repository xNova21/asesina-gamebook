// import "./App.css";
import "./micss.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
// COMPONENTS
import Home from "./components/Home/Home";
import Login from "./components/Usuario/Login";
import Game from "./components/Juego/Game";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/iniciosesion" element={<Login />} />
      <Route path="/juego" element={<Game />} />
    </Routes>
  );
}

export default App;
