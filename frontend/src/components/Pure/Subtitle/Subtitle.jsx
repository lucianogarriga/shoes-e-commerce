import React from 'react';

const Subtitle = ({text}) => {
    return (
        <div className='subtitle'> 
            <h1 className='subtitle-section'>{text}</h1>
            <a href='https://listado.mercadolibre.com.ar/zapatillas#D[A:zapatillas]' className='subtitle-link'>Ver todas</a>
        </div>
    );
}

export default Subtitle;
