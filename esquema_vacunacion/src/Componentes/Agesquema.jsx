import React  from "react";
import Image from '../Icons/imagenes.js'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const Esquema = ()=>{

return (
        <div id="FondoE">
            <div id="BoxE">
                Revisión vacunas
                <div id="Line1E">Mostrar esquema del usuario
                    <div id="BL1C">
                        
                    </div>
                </div>
                <div id="Line2E">Visualizar vacunas faltantes
                    <div id="BL1C"></div>
                </div>
                <div id="Line3E">Agendar vacuna
                    <div id="BL1C"></div>
                </div>
                <div id="BT1"><a href="/Seleccion">Generar notificación</a></div>
                <div id="BT2"><a href="/">Modificar cita</a></div>
            </div>
            <img src={Image.Triangulo} alt="Triangulo.png" id="Triangulo"/>
        </div>
     
    )
    
}
export default Esquema;