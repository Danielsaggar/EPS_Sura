import React  from "react";
import Image from '../Icons/imagenes.js'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const Selec = ()=>{

return (
        <>
        <img src={Image.Tono} alt="Tono.png" id="tigre"/>
        <img src={Image.Logo} alt="Logo.png" id="Logo"/>
        <div id="BloqS">
            <label htmlFor="">Con EPS SURA aseguramos el bienestar de su familia y la protección que necesita. </label>
            <br />
            <label htmlFor="">Busque nuestro servicios en las siguientes opciones de abajo, recuerde una vida saludable es una vida bien vivida.</label>
            <div id="Bloq3">
                <div id="AgC"><a href="/Citas">Agenda de citas</a></div>
                <div id="AgE"><a href="/Esquema">Agendamiento según esquema</a></div>
                <div id="AgV"><a href="/Vacunas">Revision de vacunas</a></div>
            </div>
        </div>
        </>
        
    )
    
}
export default Selec;