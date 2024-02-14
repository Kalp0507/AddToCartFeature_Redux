import React from 'react'
import { useSelector , useDispatch} from 'react-redux'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { remove } from '../store/CartSlice';



function Cart() {
const cartProducts = useSelector(state=>state.cart);
const dispatch = useDispatch();

const removeFromCart = (id)=>{
    //dispatch a remove action
    dispatch(remove(id));
}

const cards =cartProducts.map((product)=>{
    return (
      <div className='col-md-3'>
      <Card key={product.id} style={{width:'20rem',height:'20rem', padding:'12px 0px', margin:'3px'}}>
          <div className='text-center'>
              <Card.Img variant="top" src={product.image} style={{width:'100px',height: '150px'}}/>
          </div>
          <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text >INR: {product.price}</Card.Text>
              <Button variant="danger" onClick={()=> removeFromCart(product.id)} >Remove Item</Button>
          </Card.Body>
      </Card>
      </div>
  )});

  return (
    <>
        <div className='row'>{cards}</div>
    </>
  )
}

export default Cart
