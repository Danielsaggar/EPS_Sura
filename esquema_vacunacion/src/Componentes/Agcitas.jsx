import React  from "react";
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
                <div id="Line1C">Programe su cita
                    <div id="BL1C">
                        <input type="date" name="" id="" />
                    </div>
                </div>
                <div id="Line2C">Modifique su cita
                    <div id="BL1C"></div>
                </div>
                <div id="Line3C">Cancele su cita
                    <div id="BL1C"></div>
                </div>
                <div id="BT1"><a href="/Seleccion">Guardar</a></div>
                <div id="BT2"><a href="/">Cancelar</a></div>
            </div>
        </div>
     
    )
    
}
export default Citas;