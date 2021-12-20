import react from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import Prueba from './Componentes/Prueba';
import Login from './Componentes/Login';
import './Styles/index.css'
import Cuenta1 from "./Componentes/Cuenta1";
import Cuenta2 from "./Componentes/Cuenta2";
import Alerta from "./Componentes/Alertas";
import Selec from "./Componentes/Seleccion";
import Citas from "./Componentes/Agcitas";
import Vacunas from "./Componentes/RVacunas";
import Esquema from "./Componentes/Agesquema";


function App(){
    return(
        <Router>
            <div>
            <Routes>
                <Route path="/Prueba" element={<Prueba />}/>
                <Route path="/principal" element={<Alerta />}/>
                <Route path="/Registro1" element={<Cuenta1 />}/>
                <Route path="/Registro2" element={<Cuenta2 />}/>
                <Route path="/Alerta" element={<Alerta />}/>
                <Route path="/Seleccion" element={<Selec />}/>
                <Route path="/Citas" element={<Citas/>}/>
                <Route path="/Vacunas" element={<Vacunas/>}/>
                <Route path="/Esquema" element={<Esquema/>}/>
                <Route path="/" element={<Login />}/>
            </Routes>
            </div>
        </Router>

    );
}
export default App;