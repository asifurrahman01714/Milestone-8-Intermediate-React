import React from 'react';
import { Link } from 'react-router-dom';

const Country = () => {
    return (
        <div className="card" style="width: 18rem;">
            <img src="..." className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <Link href="#" className="btn btn-primary d-flex justify-content-center">Go somewhere</Link>
            </div>
        </div>
    );
};

export default Country;