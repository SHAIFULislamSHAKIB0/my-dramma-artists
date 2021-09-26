import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard } from '@fortawesome/free-solid-svg-icons'
import './Actor.css'

const Actor = (props) => {
    console.log(props.actor);
    const {name,img,role,expert_in,age,salary}=props.actor;
    const fontIcon = <FontAwesomeIcon icon={faAddressCard} />

    return (
        <div className="actor">
            <div>
                <img className="actor-img" src={img} alt="" />
                <h4>Name: {name}</h4>
                <p>Role: {role}</p>
                <p>Age: {age}</p>
                <h5>Expert_In: {expert_in}</h5>
                <p>Salary: {salary}</p>

                <button className="btn-regular" onClick={() => props.handleAddToCart(props.actor)} >{fontIcon} Add to Cart</button>
            </div>
        </div>
    );
};

export default Actor;