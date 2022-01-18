import React from 'react';

const User = ({user}) => {
    const {name, email} = user;
    return (
        <div>
            <h1>User Name: {name}</h1>
            <h1>User Email: {email}</h1>
        </div>
    );
};

export default User;