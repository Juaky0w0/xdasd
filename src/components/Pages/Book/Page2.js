
import React, { useState } from "react";
import '../../Formulario.css';
import { CajaRecla1,MenajeError } from "../../ElementForm.js";
import { ComponentInput, Desplegablecomp, Desplegablemoney, Descrip} from "../../input.js";
import { FondoBook } from "./bookFondo";

export const Reclamos2 = () => {
    const [nombre, cambiarNombre] = useState({ campo: '', valido: null });
    const [fecha, cambiarFecha] = useState({ campo: '', valido: null });
    const [monto, cambiarMonto] = useState({ campo: '', valido: null });
    const [descrip, cambiarDescrip] = useState({ campo: '', valido: null });
    const [formularioValido, cambiarFormularioValido] = useState(null);

    const expresiones = {
        nombre: /^[a-zA-ZA-ÿ\s]{1,40}$/, // Letrasyespacios,pueden llevar acentos.
        descripcion: /^[a-zA-ZA-ÿ\s]{1,40}$/, // Letrasyespacios,pueden llevar acentos.
        fecha: /^[a-zA-ZA-ÿ\s]{1,40}$/,
        monto: /^\d{7,14}$/, // 7 a 14 numeros.
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if (
            nombre.valido === 'true' &&
            fecha.valido === 'true' &&
            monto.valido === 'true' &&
            descrip.valido === 'true'
        ) {
            cambiarFormularioValido(true);
            cambiarNombre({ campo: '', valido: '' });
            cambiarFecha({ campo: '', valido: null });
            cambiarMonto({ campo: '', valido: null });
            cambiarDescrip({ campo: '', valido: null });            
        } else {
            cambiarFormularioValido(false);
        }
    }


    return (
        <>
        <FondoBook  />
        <div>
            <main>
            <div  action="" onSubmit={onSubmit}>
                <div className="radioBu">
                    <label className="radioTitle">Tipo de Bien Contratado</label><br />
                    <div className="radioSelec1">
                        <input type="radio" name="valor" value="si" />
                        <label className="radioV">Sí</label>
                    </div>
                    <div className="radioSelec2">
                        <input type="radio" name="valor" value="No" />
                        <label className="radioV">No</label>
                    </div>
                </div>
                <CajaRecla1 >
                    <Desplegablecomp label="Tipo de Comprobante" />
                    <ComponentInput
                        estado={nombre}
                        cambiarEstado={cambiarNombre}
                        tipo="text"
                        label="Nombre de Comprobante"
                        placeholder="Nombre"
                        name="nombre"
                        leyendaError="Formato Inválido"
                        expresionRegular={expresiones.nombre}
                    />
                    <ComponentInput
                        estado={fecha}
                        cambiarEstado={cambiarFecha}
                        tipo="text"
                        label="Fecha de bien contratado"
                        placeholder="Fecha de bien contratado"
                        name="fecha"
                        leyendaError="Formato Inválido"
                        expresionRegular={expresiones.fecha}
                    />
                    <Desplegablemoney label="Tipo de moneda"/>
                    <ComponentInput
                        estado={monto}
                        cambiarEstado={cambiarMonto}
                        tipo="text"
                        label="Monto reclamado"
                        placeholder="Monto"
                        name="monto"
                        leyendaError="Formato Inválido"
                        expresionRegular={expresiones.monto}
                    />
                </CajaRecla1>
                <Descrip 
                        estado={descrip}
                        cambiarEstado={cambiarDescrip}
                        tipo="text"
                        label="Descripción"
                        placeholder=""
                        name="descrip"
                        leyendaError="Se requiere datos"
                        expresionRegular={expresiones.descripcion}
                    />
                    
                   
                    <br />
                    {formularioValido === false && <MenajeError>
                        <p><b className="fas fa-exclamation-triangle"> ERROR: </b> Por favor rellenar el formulario correctamente.</p>
                    </MenajeError>}
                    <br />
                    <CajaRecla1 >
                        <div>
                           <a className="av" href="javascript: history.go(-1)"><span type="submit" className="botonVol">VOLVER</span></a>
                        </div>    
                    <br />
                    <div>                        
                        <a className="as" href="/LibroReclamos"><span type="submit" className="botonSig">SIGUIENTE</span></a>                         
                        </div>
                    </CajaRecla1>
                    <br /> <br />
                    </div>
            </main>
        </div>
        </>
    );
}
