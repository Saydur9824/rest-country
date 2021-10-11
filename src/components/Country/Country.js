import React from 'react';
import './Country.css'

const Country = (props) => {
    const {name, capital, population, flag} = props.countrie

    return (
        <div className = 'counrtyStyle '>
            <h3 className = 'text-worning'>Country name : {name}</h3>
            <img src={flag} alt="" />
            <h4>Capital : {capital}</h4>
            <h5>Population : {population}</h5>
        </div>
    );
};

export default Country;