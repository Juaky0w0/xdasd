import React from 'react';
import './SliderServicesFoo.scss';
import photo from '../img/slider-fo.png';

export const SliderServicesFoo = () => {

  
  return (
    <>
<div className='containerSliderFo'>
<div id="slider">
        <input type="radio" name="slider" id="slide1" checked/>
        <input type="radio" name="slider" id="slide2" />
        <input type="radio" name="slider" id="slide3" />
        <input type="radio" name="slider" id="slide4" />
        <div id="slides">
           <div id="overflow">
              <div class="inner">
                 <div class="slide slide_1">
                    <div class="slide-content">
                    <img
                    className="d-block w-100"
                  src={photo}
                     alt="Imcetron"
                        />
                    </div>
                 </div>
                 <div class="slide slide_2">
                    <div class="slide-content">
                    <img
                    className="d-block w-100"
                  src={photo}
                     alt="Imcetron"
                        />
                    </div>
                 </div>
                 <div class="slide slide_3">
                    <div class="slide-content">
                    <img
                    className="d-block w-100"
                  src={photo}
                     alt="Imcetron"
                        />
                    </div>
                 </div>
                 <div class="slide slide_4">
                    <div class="slide-content">
                    <img
                    className="d-block w-100"
                  src={photo}
                     alt="Imcetron"
                        />
                    </div>
                 </div>
              </div>
           </div>
        </div>
        <div id="controls">
           <label for="slide1"></label>
           <label for="slide2"></label>
           <label for="slide3"></label>
           <label for="slide4"></label>
        </div>
        <div id="bullets">
         <div className='sl'>
           <label for="slide1">
			<br></br>
            <h2>Espinterómetro
                  BAUR DPA75C </h2>
			<p>Ensayador de 
               líquidos aislantes </p>
           </label>
           <label for="slide2">
		   <br></br>
		   <h2>DTR
               AEMC</h2>
            <p>Medidor de relación
            de transformación</p>
           </label>
           <label for="slide3">
		   <br></br>
		   <h2>Megger
               MIT515</h2>
            <p>Ensayador de nivel
               de aislamiento </p>
           </label>
           <label for="slide4">
		   <br></br>
		   <h2>Vaisala
               DM70</h2>
            <p>Punto de Rocio<br></br>.</p>
           </label>
        </div>
     </div>
     </div>
     </div>
</>
  );
}

