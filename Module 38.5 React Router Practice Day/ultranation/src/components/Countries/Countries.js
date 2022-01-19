import React from 'react';
import Country from '../Country/Country';

const Countries = () => {
    const [countries, setCountries] = React.useState([]);
    const [spinner ,setSpinner] = React.useState(true);
    React.useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => {
                setCountries(data);
                console.log(data);
                setSpinner(false);
            });
    },[])
    return (
        <div className="container">
            
            {
                spinner === true ? 
                <div className="row justify-content-center mt-5">
                    <div class="spinner-border text-danger" role="status">
                        <span class="visually-hidden"></span>
                    </div>
                </div>
                :
                
                <div className="row">
                    {
                        countries.map(country => <Country key={country.name?.common} country={country}></Country>)
                    }
                </div> 
            }
        </div>
    );
};

export default Countries;