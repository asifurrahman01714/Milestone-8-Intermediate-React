import React from 'react';
import { useParams } from 'react-router-dom';

const Comments = () => {
    const {postId} = useParams();
    return (
        <div>
            <h1>Comments of {postId}</h1>
        </div>
    );
};

export default Comments;