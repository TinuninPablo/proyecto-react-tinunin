import React, {useState} from 'react'

function ItemCount() {
    const [count,setCount]= useState(0);
function handleAdd() {
    setCount(count +1)
}
function handleSubstract(){
    setCount(count - 1 )
}
  return (
    <div>
        <h1>Cantidad</h1>
        <div>
            <button onClick={handleSubstract}>-</button>
            <span> {count} </span>
            <button onClick={handleAdd}>+</button>
        </div>
        <div>
            <button>Agregar al carrito</button>
        </div>
    </div>
  )
}

export default ItemCount