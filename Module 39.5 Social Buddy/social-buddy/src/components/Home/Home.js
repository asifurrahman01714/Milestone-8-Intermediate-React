import React from 'react';
import Header from '../Header/Header';

const Home = () => {
    const [posts, setPosts] = React.useState([]);
    
    return (
        <div>
            <Header/>
        </div>
    );
};

export default Home;