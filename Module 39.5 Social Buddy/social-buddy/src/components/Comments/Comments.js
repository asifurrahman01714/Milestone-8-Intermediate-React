import React from 'react';
import { useParams } from 'react-router-dom';

const Comments = () => {
    const {postId} = useParams();
    const [comments, setComments] = React.useState([]);
    return (
        <div>
            <h1>Comments of {postId}</h1>
        </div>
    );
};

export default Comments;