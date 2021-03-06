// import "./App.css";
import "./micss.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";


// COMPONENTS
import Home from "./components/Datos/Home";
import Login from "./components/Usuario/Login";
import Sign from "./components/Usuario/SignUp";
import Juego from "./components/Juego/Juego";
import Libros from "./components/Datos/Libros";
import Autores from "./components/Datos/Autores";
import SobreJuego from "./components/Datos/SobreJuego";
import CrearPersonaje from "./components/CrearPersonaje/CrearPersonaje";
import InfoLateral from "./components/Datos/InfoLateral";
import Enlaces from "./components/Datos/Enlaces";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/libros" element={<Libros />} />
      <Route path="/autores" element={<Autores />} />
      <Route path="/iniciosesion" element={<Login />} />
      <Route path="/registro" element={<Sign />} />
      <Route path="/juego" element={<SobreJuego />} />
      <Route path="/info" element={<InfoLateral />} />
      <Route path="/enlaces" element={<Enlaces />} />
      <Route path="/juego/CrearPersonaje" element={<CrearPersonaje />} />
      <Route path="/juego/:libro" element={<Juego />} />

      {/* <Route path="/prueba" element={<Login/>}/> */}
    </Routes>
  );
}

export default App;
