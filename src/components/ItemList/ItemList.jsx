import Item from "../Item/Item"
import './ItemList.css';

const ItemList = ({products}) =>{
    return (
        <div className="cardsStyles">
            {products.map((product =>{
                console.log(product)
                return(
                    <Item key={ product.id } title={ product.title} price={ product.price} image={product.image} />
                )
            }))}
        </div>
    )
}

export default ItemList;