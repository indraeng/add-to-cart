import React, { useContext } from 'react'
import { CartContext } from '../context/cart'

export default function Items(props) {
    const cartContext = useContext(CartContext)
    // console.log('cart',cartContext)
    return (
        <div className='item'>
            <h3>Name : {props.name}</h3>
            <h3>Price:${props.price}</h3>
            <button onClick={() => cartContext.setItems([...cartContext.items, { name: props.name, price: props.price }])}>Add to cart</button>
        </div>
    )
}
