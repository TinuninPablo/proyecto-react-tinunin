import { useState,useContext } from 'react';
import CartContext from '../../CartContext/cart-context';
import { collection, addDoc } from 'firebase/firestore';
import db from '../../index';
import swal from 'sweetalert';
import './Checkout.css';


const Checkout = () => {
    const mostrarAlerta =()=>{
        swal({
          title:"Muchas gracias por su compra",
          text:"Su pedido esta en camino.",
          icon:"success",
          button:"Aceptar"
        })
      }

const {products,getTotalPrice}= useContext(CartContext)


const [buyer,setBuyer] =useState({
    Nombre:'',
    Email:'',
    Telefono:'',
})

const {Nombre,Email,Telefono} = buyer

const handleInputChange = (e) => {
    setBuyer(({
        ...buyer,
        [e.target.name]: e.target.value
    }))
}

const generateOrder = async(data)=>{
    try{
        const col = collection(db,"Orders")
        const order = await addDoc(col,data)
        console.log("order",order.id)
        console.log("order",order)
    }catch(err){
        console.log(err)
    }
}
const handleSubmit = (e) => {
    e.preventDefault()
    const day = new Date()
    const items = products.map(e=>{return {id:e.id,title:e.title,price:e.price,amount:e.quantity}}) 
    const total = getTotalPrice()
    const data = {buyer,items,day,total}
    console.log("data",data)
    generateOrder(data)


}
  return (
    <div className='bodyCheckout'>
        <h1 className='checkoutLetters'>Finalizando Compra</h1>
        <hr/>
        <h4 className='checkoutLetters'>Completar Datos:</h4>
        <br/>
        <form onSubmit={handleSubmit}>
            <input className='inputStyle' 
               type="text"
               name="Nombre" 
               placeholder='Nombre'
               value={Nombre}
               onChange={handleInputChange}
               required
            />
             <br/>
            <input className='inputStyle' 
               type="email"
               name="Email" 
               placeholder='Email'
               value={Email}
               onChange={handleInputChange}
               required
            />
             <br/>
             <input className='inputStyle'
               type="number"
               name="Telefono" 
               placeholder='Telefono'
               value={Telefono}
               onChange={handleInputChange}
               required
             />
            <br/><br/>

             <button onClick={() => mostrarAlerta()} className='btn btn-success'>Finalizar compra</button>
             
         </form>

    </div>
  )
}

export default Checkout
