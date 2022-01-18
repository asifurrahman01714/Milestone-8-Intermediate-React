import React from 'react';
import { useParams } from 'react-router-dom';

const UserDetails = () => {
    const {id} = useParams();
    const [users, setUsers] = React.userState([]);
    React.useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    },[]);
    const user = users.find(user => user.id === id);
    console.log(user);
    return (
        <div>
            <h1>User Details of : {id}</h1>
        </div>
    );
};

export default UserDetails;