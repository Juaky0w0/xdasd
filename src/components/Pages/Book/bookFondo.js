import React from 'react';
import imgBook from '../../../img/book.png';
import './bookFondo.css';



export const FondoBook = () => {
    return (
      <>
<div className="container-book">

  <img
     className="d-block w-100"
     src={imgBook}
     alt="imcetron"
   />
</div>
<div className='container-title-book activate'>
<div className="title-main-book">
<h3 className="title-book">Libro de Reclamaciones</h3>
<p className='texto-f'>Fecha: <b className='fech'>24-05-2022</b></p>
<p className='texto-l'>IMCETRON S.R.LTDA. | RUC: 20382775709</p>
<p className='texto-w'>WEB IMCETRON <br></br>Calle La Colonia N° 116 Urb. El Manzano, Rímac, Lima</p>
</div>
</div>   



  </>
    );
  }