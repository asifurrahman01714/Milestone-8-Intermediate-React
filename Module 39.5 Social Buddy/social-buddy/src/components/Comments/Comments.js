import React from 'react';
import { useParams } from 'react-router-dom';

const Comments = () => {
    const {postId} = useParams();
    const [comments, setComments] = React.useState([]);
    React.useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/comments`;
        fetch(url)
        .then(response => response.json())
        .then(data => setComments(data));
    }, []);
    const filteredComments = comments.filter(comment => comment.postId === parseInt(postId));
    return (
        <div>
            <h1>Comments of {postId} is {filteredComments.length}</h1>
        </div>
    );
};

export default Comments;