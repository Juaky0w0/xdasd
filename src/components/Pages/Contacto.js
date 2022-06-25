import React from "react";
import ContactFondo from "../FondoContact";
import Mapa from '../../img/mapa ref.png'
import Formulario from "../Formulario";
import './contacto.css';


export const Contacto= () => {
  return (
    <>
    <div className="container-carrusel">
    <ContactFondo />
    </div>
 
    <div className="Maps">
    <div className='img-mapa'>
        <img
          className="d-block w-100"
          src={Mapa}
          alt="Imcetron"
        />
          </div>
    </div>


    <div className="formularioC">
      <div className="tituloC">
      <h2>¿Necesitas más información?</h2>
      <p>Completa el formulario y escríbenos para solicitar mayor información sobre nuestros productos.</p> 
      </div>
      <Formulario />
    </div>
  </>
  );
};