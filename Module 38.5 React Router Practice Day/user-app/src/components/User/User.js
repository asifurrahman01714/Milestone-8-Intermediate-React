import React from 'react';

const User = ({user}) => {
    const {name, email} = user;
    const imageUrl = 'https://cn.i.cdn.ti-platform.com/cnapac/content/2017/showpage/ben-10/sa/showicon.png';
    return (
        <div className='col-md-4 '>
            <div className="card m-2" style={{width: '18rem'}}>
                <img src={imageUrl} className="card-img-top p-2" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title"><strong>Name:</strong>{name}</h5>
                    <h6 className="card-title"><strong>Email:</strong> {email}</h6>
                    <a href="#" className="btn btn-primary d-flex justify-content-center mt-4">See Details</a>
                </div>
            </div>
        </div>
    );
};

export default User;