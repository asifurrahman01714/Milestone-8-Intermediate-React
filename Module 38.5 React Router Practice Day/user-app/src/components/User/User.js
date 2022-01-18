import React from 'react';
import { Link } from 'react-router-dom';

const User = ({user, userDetails}) => {
    const {name, email, id} = user;
    const imageUrl = 'https://cn.i.cdn.ti-platform.com/cnapac/content/2017/showpage/ben-10/sa/showicon.png';
    return (
        <div className='col-md-4 '>
            <div className="card m-2" style={{width: '18rem'}}>
                <img src={imageUrl} className="card-img-top p-2" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title"><strong>Name:</strong>{name}</h5>
                    <h6 className="card-title"><strong>Email:</strong> {email}</h6>
                    <Link className="btn btn-primary d-flex justify-content-center mt-4"  to={`/userDetails/${id}`} onClick={()=>userDetails(user)}>See Details</Link>
                </div>
            </div>
        </div>
    );
};

export default User;