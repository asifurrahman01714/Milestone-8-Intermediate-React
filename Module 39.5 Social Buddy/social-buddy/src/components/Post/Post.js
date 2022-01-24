import { Button } from '@mui/material';
import React from 'react';
import './post.css';
const Post = (props) => {
    const {title, body} = props.post;
    const history = useHistory();
    return (
        <div className='col-md-4'>
            <div className="card mt-4 shadow" style={{height:'250px'}}>
                <div className="card-body">
                    <h5 className="card-title fw-bold">{title}</h5>
                    <p className="card-text" >{body}</p>
                    <Button variant="contained">Contained</Button>
                </div>
            </div>
        </div>
    );
};

export default Post;