import React from 'react';

const Post = (props) => {
    const {name, body} = props.post;
    return (
        <div className='col-md-4'>
            <div className="card mt-4 shadow" >
                <div className="card-body">
                    <h1 className="card-title fw-bold ">{name}</h1>
                    <p className="card-text">{body}</p>
                </div>
            </div>
        </div>
    );
};

export default Post;