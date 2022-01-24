import React from 'react';
const AllComment = ({comment}) => {
    const {name, email, body} = comment;
    return (
        <div className='col-md-4'>
            <div className="card mt-4 shadow" style={{height:'250px'}}>
                <div className="card-body text-center">
                    <h5 className="card-title fw-bold">{name}</h5>
                    <h6 className="">email: {email}</h6>
                    <p className="mt-3 pt-2 border-primary border-top card-text" >{body}</p>
                </div>
            </div>
        </div>
    );
};


export default AllComment;