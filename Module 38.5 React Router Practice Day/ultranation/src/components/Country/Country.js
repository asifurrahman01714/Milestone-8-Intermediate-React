import React from 'react';
import { Link } from 'react-router-dom';

const Country = (props) => {
    const name = props.country.name?.common;
    return (
        <div className="col-md-4">
            <div className="card mt-3 shadow">
                <img src={props.country.flags.png} className="card-img-top" style={{height: '200px'}} alt="..."/>
                <div className="card-body">
                    <h6 className="card-title text-center fw-bold">{name}</h6>
                    <Link href="#" className="mt-3 btn btn-primary d-flex justify-content-center">See details</Link>
                </div>
            </div>
        </div>
    );
};

export default Country;