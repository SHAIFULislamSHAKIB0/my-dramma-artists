import React from 'react';
import "./Cart.css"

const Cart = (props) => {
    
    const { cart } = props;
    let total = 0;
    for (const actor of cart) {
      total = total + actor.salary;
    }
    
    return (
        <div className="my-cart">
            <h2>Selection Cart</h2>
            <h3>Total selected : {props.cart.length}</h3>
            <p>Total Cost: ${total}</p>
            
            <h3>Selected Actors:</h3>
             {
                 cart.map(name=> <p className="selected-actors">{name.name}</p>)
             }
            
        </div>
    );
};

export default Cart;