import CartItem from "../../components/CartItem/CartItem"
import { useCartContext } from "../../context/CartContextProvider"


function Cart({item}) {
    const{ cartList } = useCartContext()
  return (
    <div>
        {cartList.map ((item =><CartItem key={item.id} item={item}/> ))}
    </div>
  )
}

export default Cart