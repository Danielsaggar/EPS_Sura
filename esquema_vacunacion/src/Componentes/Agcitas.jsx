import React, {useState}  from "react";
import Image from '../Icons/imagenes.js'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


const Citas = ()=>{

return (
        <div id="FondoC">
            <div id="BoxC">
                Agendar citas
                <div id="Line1C">Indique la fecha
                    <div >
                        <input id="BL1C" type="date" name=""  />
                    </div>
                </div>
                <div id="Line2C">Indique la hora
                    <div ><input type="time" id="BL1C" /></div>
                </div>
                
                <div id="Line3C">Especialidad
                    <div><input id="BL1C" type="text" /></div>
                </div>
                <div id="BT1"><a href="/Seleccion">Guardar</a></div>
                <div id="BT2"><a href="/Seleccion">Cancelar</a></div>
            </div>
        </div>
     
    )
    
}
export default Citas;