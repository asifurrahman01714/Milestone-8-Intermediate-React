import React from 'react';

const Users = () => {
    const [users, setUsers] = React.useState([])
    return (
        <div>
            <h1>Users: {users.length}</h1>
        </div>
    );
};

export default Users;