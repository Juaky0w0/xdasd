import React from 'react';
import './FondoServices.css';
import banerS from '../img/baner-services.png';
import {ServicesProps, ServicesPropsfoo} from './Props';
import { SliderServi, SliderServi2 } from './sliderservices';
import { SliderServicesFoo } from './SliderServicesFoo';


const ServicesFondo = () => {
  return (
    <>
<div className="container-numero">
<div className='img-baner'>
<img
   className="d-block w-100"
   src={banerS}
   alt="imcetron"
 />
 </div>
<div className='container-title-services'>
<div className="title-main">
<h3 className="title-empresa-services">Nuestros Servicios</h3>
</div>
<p className='texto-empresa-services'>Garantizamos la mejor experiencia
 a nuestros clientes</p>
</div>   

</div>


<ServicesProps 
title='Principales servicios'
name='Mantenimiento y pruebas'
context='Manejamos tecnología sólida y contamos con una alta experiencia en nuestros proyectos. Nuestro servicio de mantenimiento y pruebas de transformadores de potencia y distribución lo realizamos in situ o en nuestro taller de Puente Piedra.'/>

<SliderServi  />

<div className='body-color'>
<ServicesProps 
title='Alquiler y suministros'
name='Equipos para proyectos'
context='Ofrecemos productos y servicios de excelente calidad, con profesionalismo, responsabilidad y eficacia, así como los equipos adecuados para atender eficazmente sus necesidades técnicas y/o tecnológicas'/>

<SliderServi2  />
</div>

<ServicesPropsfoo  
name='Equipos para proyectos'
context='Ofrecemos productos y servicios de excelente calidad, con profesionalismo, responsabilidad y eficacia, así como los equipos adecuados para atender eficazmente sus necesidades técnicas y/o tecnológicas'/>
<SliderServicesFoo  />




</>
  );
}


export default ServicesFondo;
