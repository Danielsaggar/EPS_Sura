import React  from "react";


const cuenta1 = ()=>{

    return (
            <>
                <div id="BloqC">
                    Crea tu cuenta de SURA
                    <div id="BloqCC">
                        <div > <p id="TipNumP">Número de identificación</p> <input id="TipNum" type="number" /></div>
                        <div > <p id="TipIdP">Tipo de identificación</p><input id="TipId" type="text" /></div>
                        <div > <p id="TipCelP">Telefono celular</p><input id="TipCel" type="number" /></div>
                        <div > <p id="TipCePC">Contraseña</p><input id="TipCeC" type="number" /></div>
                        <div > <p id="TipCeP">Correo electronico</p><input id="TipCe" type="text" /></div>
                        <div > <p id="TipCCeP">Confirmar contraseña</p><input id="TipCCe" type="text" /></div>
                        <b id="CD"><input type="checkbox"/> Acepto los Terminos del servicio y la Politica de privacidad y ley de datos personales</b>
                        <div id="TipSig"><a href="/principal">Siguiente</a></div>

                    </div>
                </div>
            
            
            </>
        )
        
    }
    export default cuenta1;