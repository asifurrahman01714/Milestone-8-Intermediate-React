import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Country = (props) => {
    const name = props.country.name?.common;
    const history = useHistory();
    const handleClick = (name) => {
        history.push(`/country/${name}`);
    }
    return (
        <div className="col-md-4">
            <div className="card mt-3 shadow">
                <img src={props.country.flags.png} className="card-img-top" style={{height: '200px'}} alt="..."/>
                <div className="card-body">
                    <h6 className="card-title text-center fw-bold">{name}</h6>
                    {/* <Link className="mt-3 btn btn-primary d-flex justify-content-center" to={`/country/${name}`}>See details</Link> */}
                    <div className="d-flex justify-content-center">
                        <button className="mt-3 btn btn-primary " onClick={()=>handleClick(name)}>See Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Country;