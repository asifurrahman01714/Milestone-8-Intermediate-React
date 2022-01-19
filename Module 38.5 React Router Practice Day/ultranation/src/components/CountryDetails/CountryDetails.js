import React from 'react';
import { useParams } from 'react-router-dom';

const CountryDetails = () => {
    const {name} = useParams();
    // console.log(useParams());
    const url = `https://restcountries.com/v3.1/name/${name}`;
    const [country, setCountry] = React.useState({});
    const [spinner, setSpinner] = React.useState(true);
    React.useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setCountry(data[0]);
                setSpinner(false);
            });
    },[])
    console.log(country);
    const image = country.flags?.png;
    const area = country?.area;
    const population = country?.population;
    let status = country?.status;
    status = status?.toUpperCase(); // Omg..fo toUpperCase we have to use optional chaining
    return (
        <div className="container">
            <div className="row justify-content-center mt-3">
                {
                    spinner === true ?
                    <div class="spinner-border text-danger" role="status">
                            <span class="visually-hidden"></span>
                    </div>
                    :
                    <div className="col-6">
                        <div class="card shadow">
                            <img src={image} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Name: {name}</h5>
                                <h5 class="card-title">area: {area}</h5>
                                <h5 class="card-title">Population: {population}</h5>
                                <h5 class="card-title text-success">Name: {status}</h5>
                            </div>
                        </div>
                    </div>
                }
                
            </div>
        </div>
    );
};

export default CountryDetails;