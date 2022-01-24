import React from 'react';
import AllComment from '../AllComment/AllComment';

const AllComments = () => {
    const [comments, setComments] = React.useState([]);
    const [spinner ,setSpinner] = React.useState(true);
    React.useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/comments`;
        fetch(url)
        .then(response => response.json())
        .then(data =>{
            setComments(data);
            setSpinner(false);
        });
    }, []);
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
                        comments.map(comment => <AllComment key={comment.id} comment={comment}/>)
                    }
                </div>
            }
            
        </div>
    );
};

export default AllComments;