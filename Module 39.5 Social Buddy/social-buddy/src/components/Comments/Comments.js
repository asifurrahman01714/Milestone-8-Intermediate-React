import React from 'react';
import { useParams } from 'react-router-dom';
import Comment from '../Comment/Comment';

const Comments = () => {
    const {postId} = useParams();
    const [comments, setComments] = React.useState([]);
    const [spinner ,setSpinner] = React.useState(true);
    React.useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
        fetch(url)
        .then(response => response.json())
        .then(data => {
            setComments(data);
            setSpinner(false);
        });
    },[])
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
            {
                spinner === true ? 
                <div className="row justify-content-center mt-5">
                    <div class="spinner-border text-danger" role="status">
                        <span class="visually-hidden"></span>
                    </div>
                </div>
                :

                <div className="row">
                    {
                        comments.map(comment => <Comment key={comment.id} comment={comment}/>)
                    }
                </div>
            }
        </div>
    );
};

export default Comments;