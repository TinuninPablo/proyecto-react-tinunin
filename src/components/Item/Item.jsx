import { Button, Card } from 'react-bootstrap';
import './Item.css';

const Item = ({title, price,image}) =>{
    return (
        <div>
            <Card style={{ width: '18rem' }} className="cardsStyles" >
              <Card.Img variant="top" src= {image} />
              <Card.Body>
                <Card.Title> {title} </Card.Title>
                <Card.Text>
                  {price}
                </Card.Text>
                <Button variant="primary">
                  Añadir al carrito
                </Button>
              </Card.Body>
            </Card>
        </div>
    )
}

export default Item;