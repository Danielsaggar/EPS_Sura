import React  from "react";


const alerta = ()=>{

    return (
            <>
           
            <div id="BloqC">
                <div ><p id="TipNumP"> Fecha de vacunación</p><input id="TipNum" type="date" /></div>
                <div ><p id="TipIdP">Edad(Meses)</p><input id="TipId" type="number" /></div>
                <div ><p id="TipCelP">Hora de la vacuna</p><input id="TipCel" type="number" /></div>
                <div ><input type="submit" value="Guardar fecha" id="Alert2"/></div>
                <div id="Alert"><a href="/Seleccion">Activar alarma</a></div>
                <div id="Anuncio">Ya está vacunado de Covid19, Tétanos, Difteria, Tos Ferina, Influenza Tipo B, Poliomelitis,
                Hepatitis B, Meningitis, Fiebre Amarilla, ëbola.</div>
            
            </div>
            </>
        )
        
    }
export default alerta;