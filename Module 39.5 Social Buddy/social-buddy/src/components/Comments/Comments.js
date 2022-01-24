import React from 'react';
import { useParams } from 'react-router-dom';
import Comment from '../Comment/Comment';

const Comments = () => {
    const {postId} = useParams();
    const [comments, setComments] = React.useState([]);
    /*
    React.useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/comments`;
        fetch(url)
        .then(response => response.json())
        .then(data => setComments(data));
    }, []);
    const filteredComments = comments.filter(comment => comment.postId === parseInt(postId));
    */
   
    return (
        <div className="container">
            <div className="row">
                {
                    filteredComments.map(comment => <Comment key={comment.id} comment={comment}/>)
                }
            </div>
        </div>
    );
};

export default Comments;