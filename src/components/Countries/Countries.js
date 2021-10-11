import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);

    useEffect(()=>{
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])
    return (
        <div>
            <h2>Countrys Data : {countries.length}</h2>
          <div className = 'boxModel'>
          {
            countries.map(countrie => <Country 
                key = {countrie.alpha2Code}
                countrie = {countrie}
             ></Country>)
          }
          </div>
        </div>
    );
};

export default Countries;