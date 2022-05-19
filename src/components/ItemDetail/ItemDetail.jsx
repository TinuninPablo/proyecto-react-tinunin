import React, { useContext} from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../../CartContext/cart-context';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css'

function ItemDetail({ item }) {
    const cartCtx = useContext(CartContext);

    function addHandler(quantityToAdd) {
        cartCtx.addProduct({quantity: quantityToAdd, ...item});
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
                    <ItemCount initial={0} stock={item.stock} onAdd={addHandler} />
                    {cartCtx.isInCart(item.id) &&
                        <button className='button-cart-buy '>
                            <Link to='/cart'className='button-letter-buy'>
                                Ir al Carrito ({ cartCtx.getCartQuantity() } items)
                            </Link>
                        </button>
                    }
                </div>
            </div>
        </div>
    </div>
    )
}
export default ItemDetail