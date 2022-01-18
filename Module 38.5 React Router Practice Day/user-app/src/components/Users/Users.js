import React from 'react';

const Users = () => {
    const [users, setUsers] = React.useState([]);
    React.useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => setUsers(data))
    },[])
    return (
        <div>
            <h1>Users: {users.length}</h1>
        </div>
    );
};

export default Users;