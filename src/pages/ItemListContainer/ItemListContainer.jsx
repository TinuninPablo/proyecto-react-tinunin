import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../../components/ItemList/ItemList';
import './ItemListContainer.css'

function getProducts(category) {
  const myPromise = new Promise((resolve, reject) => {
    const productsList = [
      
      {
        id: 1,
        imageUrl:
          "https://http2.mlstatic.com/D_NQ_NP_2X_755743-MLA41523503764_042020-F.webp",
        title: "Auriculares gamer inalámbricos Astro A50 negro y gold",
        descripcion: "este es el primer producto",
        category: "Auriculares",
        price: "$34.653",
        stock: "25",
      },
      {
        id: 2,
        imageUrl: "https://http2.mlstatic.com/D_NQ_NP_2X_903817-MLA47947792514_102021-F.webp",
        title: "Mouse de juego Logitech G Series Hero G502 kda",
        descripcion: "este es el Segundo producto",
        category: "Ratones",
        price: "$6.999",
        stock: "252",
      },
      {
        id: 3,
        imageUrl:
          "https://http2.mlstatic.com/D_NQ_NP_2X_897779-MLA46504109530_062021-F.webp",
        title: "Teclado gamer Redragon Dragonborn K630 QWERTY Redragon Brown inglés US color blanco con luz RGB",
        descripcion: "este es el tercero producto",
        category: "Teclados",
        price: "$5.499",
        stock: "58",
      },
      {
        id: 4,
        imageUrl:
          "https://http2.mlstatic.com/D_NQ_NP_2X_799581-MLA46503780892_062021-F.webp",
        title: "Teclado gamer HyperX Alloy Origins Core QWERTY Red inglés US color negro con luz RGB",
        descripcion: "este es el cuarto producto",
        category: "Teclado",
        price: "$11.799",
        stock: "73",
      },
      {
        id: 5,
        imageUrl: "https://http2.mlstatic.com/D_NQ_NP_2X_784991-MLA48690719527_122021-F.webp",
        title: "Monitor gamer BenQ XL-K Series XL2546K LCD 24.5pulgadas; negro 100V/240V",
        descripcion: "este es el quinto producto",
        category: "Monitores",
        price: "$109.999",
        stock: "89",
      },
      {
        id: 6,
        imageUrl:
          "https://http2.mlstatic.com/D_NQ_NP_2X_859975-MLA48689271995_122021-F.webp",
        title: "Monitor gamer curvo Samsung Odyssey LC49G95TS Qled 49pulgadas; negro 100V/240V",
        descripcion: "este es el sexto producto",
        category: "Monitores",
        price: "300.970$",
        stock: "2",
      },
      {
        id: 7,
        imageUrl:
          "https://http2.mlstatic.com/D_NQ_NP_2X_856496-MLA40733117105_022020-F.webp",
        title: "Mouse Pad gamer Logitech G440 Serie G de caucho y tela 280mm x 340mm x 3mm negro",
        descripcion: "este es el séptimo producto",
        category: "MousePad",
        price: "$1.700",
        stock: "18",
      },
      {
          id: 8,
          imageUrl:
            "https://http2.mlstatic.com/D_NQ_NP_2X_703156-MLA44385081441_122020-F.webp",
          title: "Kit Microfono Condenser Mut Bm-800 Soporte Shock Youtuber",
          descripcion: "este es el octavo producto",
          category: "Microfonos",
          price: "$5391",
          stock: "14",
      },
      {
        id: 9,
        imageUrl:
          "https://http2.mlstatic.com/D_NQ_NP_2X_917766-MLA43059544028_082020-F.webp",
        title: "Amazon Echo Dot 3rd Gen con asistente virtual Alexa charcoal 110V/240V",
        descripcion: "este es el noveno producto",
        category: "Parlantes",
        price: "$8.199",
        stock: "17",
      },
      {
        id: 10,
        imageUrl:
          "https://http2.mlstatic.com/D_NQ_NP_2X_904570-MLA49170407523_022022-F.webp",
        title: "Cámara web Logitech C922 Full HD 60FPS color negro",
        descripcion: "este es el décimo producto",
        category: "Camaras",
        price: "$11.880",
        stock: "50",
      },
    ];
    
    const productsFiltered = category ? productsList.filter(p => p.category === category) : productsList;
    setTimeout(() => {
      resolve(productsFiltered);
    }, 2000);
  });
  return myPromise;
}

function ItemListContainer({ greeting }) {
  // function dummy() {
  //   console.log('dummy prop function');
  // }
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    getProducts(categoryId)
      .then(res => {
        setProducts(res);
      })
      .catch(err => {
        console.log(err);
        alert('Ocurrio un error, revisar la consola!');
      });
  }, [categoryId]);

  return (
    <div className='list-item-container'>
      <ItemList items={products} />
    </div>
  )
}

export default ItemListContainer