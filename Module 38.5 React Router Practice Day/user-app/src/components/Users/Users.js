import React from 'react';
import User from '../User/User';

const Users = () => {
    const [users, setUsers] = React.useState([]);
    React.useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => setUsers(data))
    },[])
    return (
        <div>
            {
                users.map(user =><User user={user}/>)
            }
        </div>
    );
};

export default Users;