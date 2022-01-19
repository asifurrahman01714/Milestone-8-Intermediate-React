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
            
            {
                countries.length === 250 ? 
                <div className="row">
                    {
                        countries.map(country => <Country key={country.name?.common} country={country}></Country>)
                    }
                </div> :
                <div className="row justify-content-center mt-5">
                    <div class="spinner-border text-danger" role="status">
                        <span class="visually-hidden"></span>
                    </div>
                </div>
            }
        </div>
    );
};

export default Countries;