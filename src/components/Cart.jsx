import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../context/cart'

export default function Cart() {
    const cart = useContext(CartContext);
    const totalPrice = cart.items.reduce((a, b) => a + b.price, 0);
    console.log(cart.items)

    return (
        <div>
            {
                cart && cart.items.map((item) => {
                    return (
                        <li>{item.name}-${item.price}</li>
                    )
                })
            }
            <h3>Total Bill -${totalPrice}</h3>
        </div>
    )
}
