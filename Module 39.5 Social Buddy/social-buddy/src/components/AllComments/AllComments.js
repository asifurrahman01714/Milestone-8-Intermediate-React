import React from 'react';
import AllComment from '../AllComment/AllComment';

const AllComments = () => {
    const [comments, setComments] = React.useState([]);
    React.useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/comments`;
        fetch(url)
        .then(response => response.json())
        .then(data => setComments(data));
    }, []);
    return (
        <div className="container">
            <div className="row">
                {
                    comments.map(comment => <AllComment key={comment.id} comment={comment}/>)
                }
            </div>
        </div>
    );
};

export default AllComments;