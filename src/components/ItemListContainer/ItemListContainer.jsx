import React, { useState, useEffect } from 'react'
import ItemCount from '../ItemCount/ItemCount';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import getData from '../../Services/getData';

const ItemListContainer = ({greeting}) => {
  const [products,setProducts] = useState([]);

  useEffect(() =>{
   getData
   .then((response) => setProducts(response))
   .catch((error) => console.log("error: ", error))
  })
  return (
    <div className='box'>
      Hola,bienvenido!
      <ItemCount stock={10} initial ={1} />
      <ItemList products={products} />
    </div>

  )
}
export default ItemListContainer