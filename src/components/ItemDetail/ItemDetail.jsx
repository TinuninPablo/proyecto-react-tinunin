import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCartContext} from '../../context/CartContextProvider';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css'

function ItemDetail({ item }) {
    const [cantidadDeProductos, setCantidadDeProductos] = useState(null);
    const {addToCart} = useCartContext()

    function addHandler(quantityToAdd) {
        setCantidadDeProductos(quantityToAdd);
        addToCart(item,quantityToAdd);
    
    }
   

  return (
    <div className='item-detail'>
        <div className='left'>
            <div className='img-detail-container'>
                <img src={ item?.imageUrl } alt='Imagen del producto' />
                <p className='stock'>Precio: { item?.price }</p>   
            </div>
        </div>
        <div className='right'>
            <div className='info-container'>
                <h2>{ item?.title }</h2>
                <p className='descripcion'>{ item?.descripcion} </p>
                <p className='stock'>Stock: {item?.stock} </p>
                <div className='count-container'>
                {cantidadDeProductos ?
                         <button><Link to='/cart'>Agregar al carro ({ cantidadDeProductos } productos)</Link></button> :
                         <ItemCount initial={0} stock={item.stock} onAdd={addHandler} />
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default ItemDetail