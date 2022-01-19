import React from 'react';
import Country from '../Country/Country';

const Countries = () => {
    const [countries, setCountries] = React.useState([]);
    React.useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => {
                setCountries(data);
                console.log(data);
            });
    },[])
    return (
        <div className="container">
            <div className="row">
                {
                    countries.map(country => <Country key={country.area} country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;