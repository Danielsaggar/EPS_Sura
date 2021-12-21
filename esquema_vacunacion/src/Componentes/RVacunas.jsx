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
                Creacion inventario de vacunas
                <div id="Line1C">Nombre de vacuna
                    <div ><input id="BL1C" type="text" />
                    </div>
                </div>
                <div id="Line2C">Cantidad en inventario
                    <div ></div><input type="number" id="BL1C"/>
                </div>
                <div id="BT1V"><a href="/Seleccion">Guardar</a></div>
                <div id="BT2V"><a href="/Seleccion">Cancelar</a></div>
                
            </div>
        </div>
     
    )
    
}
export default Vacunas;