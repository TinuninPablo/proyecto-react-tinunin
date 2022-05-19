import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartItem from '../../components/CartItem/CartItem';
import CartContext from '../../store/cart-context';
import swal from 'sweetalert'
import './Cart.css';

function Cart() {
  const cartCtx = useContext(CartContext);
  const mostrarAlerta =()=>{
    swal({
      title:"Muchas gracias por su compra",
      text:"Su pedido esta en camino.",
      icon:"success",
      button:"Aceptar"
    })
  }

  return (
    <div className='cart'>
      {cartCtx.products.map(p => <CartItem item={p} key={p.id}/>)}
      {cartCtx.products.length !== 0 ?
        <div className='total-container'>
          <p>Precio total: ${cartCtx.getTotalPrice()}</p>
          <button onClick={() => mostrarAlerta()}>Terminar compra</button>
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