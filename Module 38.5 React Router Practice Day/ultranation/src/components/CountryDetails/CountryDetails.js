import React from 'react';
import { useParams } from 'react-router-dom';

const CountryDetails = () => {
    const {name} = useParams();
    // console.log(useParams());
    return (
        <div>
            <h1>CountryDetails</h1>
        </div>
    );
};

export default CountryDetails;