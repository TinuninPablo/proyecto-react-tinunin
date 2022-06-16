import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartItem from '../../components/CartItem/CartItem';
import CartContext from '../../CartContext/cart-context';
import './Cart.css';

function Cart() {
  const cartCtx = useContext(CartContext);
 

  return (
    <div className='cart'>
      {cartCtx.products.map(p => <CartItem item={p} key={p.id}/>)}
      {cartCtx.products.length !== 0 ?
        <div className='total-container'>
          <p>Precio total: ${cartCtx.getTotalPrice()}</p>
            <Link to='/checkout'>
              <button className='btn btn-danger'>Terminar Compra</button>
            </Link>
        </div> :
        <>
          <h2>No hay nada por aqui...</h2>
          <button className='button-carrito'>
            <Link to='/'>Volver a productos</Link>
          </button>
        </>
      }
    </div>
  )
}

export default Cart