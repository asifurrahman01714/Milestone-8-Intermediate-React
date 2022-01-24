import React from 'react';
import Post from '../Post/Post';

const Home = () => {
    const [posts, setPosts] = React.useState([]);
    const [spinner ,setSpinner] = React.useState(true);
    React.useEffect(()=>{
        const url = 'https://jsonplaceholder.typicode.com/posts';
        fetch(url)
        .then(response => response.json())
        .then(data => {
            setPosts(data);
            setSpinner(false);
        });
    }, []);
    return (
        <div>
            <div className='container'>
                <div className="row">
                    {
                        posts.map(post => <Post key={post.id} post={post}/>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;