import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Bubble from '../Bubble/Bubble';
import CartContext from '../../CartContext/cart-context';
import './CartWidget.css';

function CartWidget() {
  const cartCtx = useContext(CartContext);

  return (
    <div className='cart-item-wrapper'>
        <Link to='/cart' className='carrito'>
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="navbar__cart-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path></svg>
        </Link>
        {cartCtx.products.length !== 0 && 
          <div className='cart-bubble'>
            <Bubble>
              { cartCtx.getCartQuantity() }
            </Bubble>
          </div>
        }
    </div>
  )
}

export default CartWidget