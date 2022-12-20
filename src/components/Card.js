import React from 'react';
import './Card.css'

const Card = (props) => {
    const { name, email } = props;
    return (
        <div className="bg-light-green br3 dib pa3 ma2 grow bw2 shadow-5 tc"> 
            <img src={`https://robohash.org/${name}?set=set4&size=200x200`} alt="robots" />
            <div>
                <h2>{name}</h2>
                <p>{email}com</p>
            </div>
        </div>
    );
}

export default Card;
