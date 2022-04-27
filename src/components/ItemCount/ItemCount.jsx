import React, {useState} from 'react'

function ItemCount({stock, initial}) {
    const [count,setCount]= useState(initial);

const handleAdd = () => {
    const newValue =count + 1;
    if(newValue <= stock ){
        setCount(newValue)
    }
}

const handleSubstract = () =>{
   const newValue = count - 1;
   if(newValue >= initial){
       setCount(newValue)
   }
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