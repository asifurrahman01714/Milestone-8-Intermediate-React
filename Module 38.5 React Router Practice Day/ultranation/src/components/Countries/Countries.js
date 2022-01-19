import React from 'react';

const Countries = () => {
    const [countries, setCountries] = React.useState([]);
    React.useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(res => res.json())
            .then(data => {
                setCountries(data);
            });
    },[])
    return (
        <div>
            <h1>Countries. {countries.length}</h1>
        </div>
    );
};

export default Countries;