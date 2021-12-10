import React  from "react";
import Image from '../Icons/imagenes.js'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const Login = ()=>{

return (
        <>
        <img src={Image.Tono} alt="Tono.png" id="tigre"/>
        <img src={Image.Logo} alt="Logo.png" id="Logo"/>
        <div id="RectLogin">
            <div id="IdLog"></div>
            <div id="IdNum"></div>
            <div id="IdCon"></div>
            <div id="BotlOG">
                    <a href="/Registro1">Iniciar sesión</a>
            </div>
        </div>
        </>
        
    )
    
}
export default Login;