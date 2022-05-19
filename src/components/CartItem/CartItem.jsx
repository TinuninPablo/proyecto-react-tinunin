import React, { useContext } from 'react';
import CartContext from '../../store/cart-context';
import ButtonDelete from '../ButtonDelete/ButtonDelete';
import './CartItem.css';

function CartItem({ item }) {
  const cartCtx = useContext(CartContext);

  

  return (
    <>
        <div className='cart-item'>
            <p className='quantity-cart'>{ item?.quantity }</p>
            <div className='cart-img-container'>
                <img src={ item?.imageUrl } alt="Imagen del producto" />
            </div>
            <p>{ item?.title }</p>
            <p className='price-count'>${ item?.price }</p>
            <ButtonDelete isButton onBubbleClick={() => cartCtx.removeProduct(item.id)}>Eliminar</ButtonDelete>
            
        </div>
        
    </>
  )
}

export default CartItem