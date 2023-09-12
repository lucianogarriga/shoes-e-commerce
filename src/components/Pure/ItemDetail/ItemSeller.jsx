import React from 'react';
import "./itemSeller.css";

const ItemSeller = () => {
    return (
        <div>
            <h2 className="item-title-seller">
                Información sobre el vendedor
              </h2>
              <div className='item-seller-info'>
                <div className='item-seller-status-info'>
                    <i></i>
                    <div>
                        <p className='item-status-title'>MercadoLíder Platinum</p>
                        <p className='item-status-subtitle'>¡Es uno de los mejores del sitio!</p>
                    </div>
                </div>
                <ul></ul>
                <div className='item-seller-reputation-info'>
                    <ul className='item-seller-list-description'>
                        <li className='item-seller-description'>
                        <strong>+1000</strong>
                        <p>Ventas en los últimos 60 días</p> 
                        </li>
                        <li className='item-seller-description'>Brinda buena atención</li>
                        <li className='item-seller-description'>Despacha sus productos a tiempo</li>
                    </ul>
                </div>
              </div>
              <a className='item-seller-link' href=''>Ver más datos de este vendedor</a>
        </div>
    );
}

export default ItemSeller;
