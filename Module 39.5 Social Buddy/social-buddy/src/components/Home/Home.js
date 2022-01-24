import React from 'react';
import Header from '../Header/Header';

const Home = () => {
    const [posts, setPosts] = React.useState([]);
    React.useEffect(()=>{
        const url = 'https://jsonplaceholder.typicode.com/posts';
        fetch(url)
        .then(response => response.json())
        .then(data => setPosts(data));
    }, []);
    return (
        <div>
            <Header/>
            <div>
                
            </div>
        </div>
    );
};

export default Home;