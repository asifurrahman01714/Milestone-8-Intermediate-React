import React from 'react';
import User from '../User/User';

const Users = () => {
    const [users, setUsers] = React.useState([]);
    React.useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => setUsers(data))
    },[]);
    const userDetails = (user)=>{
        console.log('Clicked for details')
    }
    return (
        <div className='mt-3 row'>
            {
                users.map(user =><User user={user} key={user.id} userDetails={userDetails}/>)
            }
        </div>
    );
};

export default Users;