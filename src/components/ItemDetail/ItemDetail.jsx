import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css'

function ItemDetail({ item }) {
  return (
    <div className='item-detail'>
        <div className='left'>
            <div className='img-detail-container'>
            <h2>{ item?.title }</h2>
                <img src={ item?.imageUrl } alt='Imagen del producto' />
                <p className='stock'>{ item?.price }</p>   
            </div>
        </div>
        <div className='right'>
            <div className='info-container'>
                <p className='descripcion'>{ item?.descripcion} </p>
                <p className='stock'>Stock: {item?.stock} </p>
                <div className='count-container'>
                    <ItemCount initial={0} stock={item.stock} onAdd={() => {}} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default ItemDetail