import React from 'react'


function Cart({item}) {
  return (
    <div className='cart-page'>
        <div class="row shoppingCartItem">
    <div class="col-6">
        <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
            <img className='shopping-cart-image' src={ item?.imageUrl } alt="Imagen del producto" />
            <h6 class="shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0">{ item?.title }</h6>
        </div>
    </div>
    <div class="col-2">
        <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
            <p class="item-price mb-0 shoppingCartItemPrice">${ item?.price }</p>
        </div>
    </div>
    <div class="col-4">
        <div
            class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
            <input className="shopping-cart-quantity-input shoppingCartItemQuantity" type="number" readOnly value={1} />
            <button class="btn btn-danger buttonDelete" type="button">Eliminar</button>
        </div>
     </div>
    </div>
    </div>
  )
}

export default Cart