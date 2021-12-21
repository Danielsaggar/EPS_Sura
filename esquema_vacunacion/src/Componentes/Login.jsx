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
            <div ><p id="IdLogP"> Ingrese su documento de identidad</p><input type="text" id="IdLog"  /></div>
            <div ><p id="IdNumP">Contraseña</p><input type="password" id="IdNum"  /></div>
            <div ><p id="IdNumP2">Tipo de usuario</p><input type="text" id="IdNum2"  /></div>
            
            <div id="BotlOG">
                    <a href="/seleccion">Iniciar sesión</a>
            </div>
            <div id="BotlOG2">
                    <a href="/Registro1">Registro</a>
            </div>
        </div>
        </>
        
    )
    
}
export default Login;