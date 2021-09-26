import React, { useEffect, useState } from 'react';
import Actor from '../Actor/Actor';
import Cart from '../Cart/Cart';
import "./Actors.css"

const Actors = () => {
    const [actors,setActors]=useState([])
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        fetch("./actors.JSON")
        .then(res=>res.json())
        .then(data=>setActors(data))
    },[])

    const handleAddToCart=(actor)=>{
        const newCart =[...cart,actor];
        setCart(newCart);
    }

    return (
        <div className="container">
            <div className="actor-container">
                {
                    actors.map(actor=> <Actor key={actor.name} 
                        handleAddToCart={handleAddToCart}  actor={actor}></Actor>)
                }

            </div>
            <div className="cart-container">
              <Cart cart={cart}></Cart>
            </div>
            
            
        </div>
    );
};

export default Actors;