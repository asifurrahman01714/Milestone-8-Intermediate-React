import { Button } from '@mui/material';
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { SearchContext } from '../../App';
import './post.css';
const Post = (props) => {
    const {title, body, id} = props.post;
    const history = useHistory();
    const handleClick = () => {
        history.push(`/comments/${id}`);
    };
    const [search, setSearch] = useContext(SearchContext);
    const [post, setPost] = React.useState([]);
    
    React.useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/posts?id=${search}`;
        fetch(url)
        .then(response => response.json())
        .then(data => {
            setPost(data);
        });
    }, []);
    console.log(post);
    return (
        <div className='col-md-4'>
            <div className="card mt-4 shadow" style={{height:'250px'}}>
                <div className="card-body text-center">
                    <h5 className="card-title fw-bold ">{title}</h5>
                    <p className="card-text" >{body}</p>
                    <Button variant="contained" onClick={handleClick}>Comments</Button>
                </div>
            </div>
        </div>
    );
};

export default Post;