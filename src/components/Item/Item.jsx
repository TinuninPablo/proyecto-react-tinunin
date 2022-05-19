import React,{ useContext } from 'react';
import { Link } from 'react-router-dom';
import './Item.css';
import CartContext from '../../store/cart-context';
import ButtonDelete from '../ButtonDelete/ButtonDelete';

function Item({ item }) {
  const cartCtx = useContext(CartContext);
  return (
    <div className='card'>
        <div className='header'>{ item?.title }</div>
        <div className='content'>
            <div className='img-container'>
                <img className='product-img' src={ item?.imageUrl } alt="Imagen del producto" />
            </div>
            <Link to={'/item/' + item?.id}>
              <button className='boton'>Ver Detalles</button>
            </Link>
        </div>
        <div className='footer'>${ item?.price }</div>
        <div className='button-add'>
              <ButtonDelete isButton onBubbleClick={() => cartCtx.addProduct({quantity: 1, ...item})}>Agregar producto al carrito</ButtonDelete>
            </div>
    </div>
  )
}

export default Item