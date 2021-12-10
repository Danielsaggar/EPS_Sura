import React  from "react";
import Image from '../Icons/imagenes.js'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const Vacunas = ()=>{

return (
        <div id="FondoV">
            <div id="BoxV">
                Revisión vacunas
                <div id="Line1C">Crear la vacuna
                    <div id="BL1C">
                    </div>
                </div>
                <div id="Line2C">Cantidad en inventario
                    <div id="BL1C"></div>
                </div>
                <div id="BT1V"><a href="/Seleccion">Guardar</a></div>
                <div id="BT2V"><a href="/">Cancelar</a></div>
                <div id="BT3V"><a href="/">Revisar esquema</a></div>
            </div>
        </div>
     
    )
    
}
export default Vacunas;