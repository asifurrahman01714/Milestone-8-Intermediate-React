import React from 'react';

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
        <div>
            <h1>Countries. {countries.length}</h1>
        </div>
    );
};

export default Countries;