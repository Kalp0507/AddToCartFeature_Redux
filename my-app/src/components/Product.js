import {useState,useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../store/CartSlice';
import {getProducts} from '../store/ProductSLice'
import StatusCode from '../utils/StatusCode';

const Product = () => {

    const dispatch = useDispatch();
    const {data: products,status} = useSelector(state => state.products)

    useEffect(()=>{

        //dispatch an action for fetchProduct
        dispatch(getProducts())
    },[])

const addToCart = (product) => {
    //dispatching add action 
    dispatch(add(product))
}

if(status === StatusCode.LOADING){
    return <p>Loading...</p>
}
else if(status=== StatusCode.ERROR){
    return <Alert variant='danger' key={'danger'}>Something went wrong! Try again later.</Alert>
}

const cards = products.map((product)=>{
  return (
    <div className='col-md-3'>
    <Card key={product.id} style={{width:'20rem',height:'20rem', padding:'12px 0px', margin:'3px'}}>
        <div className='text-center'>
            <Card.Img variant="top" src={product.image} style={{width:'100px',height: '150px'}}/>
        </div>
        <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text >INR: {product.price}</Card.Text>
            <Button variant="primary" onClick={()=>addToCart(product)}>Add to Cart</Button>
        </Card.Body>
    </Card>
    </div>
)});


    return(
        <>
            <h1>Product</h1>
            <div className='row'>{cards}</div>
        </>
    )
}

export default Product