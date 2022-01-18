import React from 'react';
import { useParams } from 'react-router-dom';

const UserDetails = () => {
    const {id} = useParams();
    console.log(id);
    const [users, setUsers] = React.useState([]);
    React.useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    },[]);
    const singleUser = users.find(user => user.id === parseInt(id)); //user was not showign at first. so you have to convert the string to integer
    console.log(singleUser);
    return (
        <div>
            <h1>User Details of : {id}</h1>
        </div>
    );
};

export default UserDetails;