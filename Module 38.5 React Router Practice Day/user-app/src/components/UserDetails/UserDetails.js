import React from 'react';
import { useParams } from 'react-router-dom';

const UserDetails = () => {
    const {id} = useParams();
    const [user, setUser] = React.userState([]);
    React.useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUser(data))
    },[])
    return (
        <div>
            <h1>User Details of : {id}</h1>
        </div>
    );
};

export default UserDetails;