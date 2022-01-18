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
    const user = users.find(user => user.id === parseInt(id)); //user was not showign at first. so you have to convert the string to integer
    console.log(users);
    console.log(user);
    // const {name, email} = user;
    const imageUrl = 'https://cn.i.cdn.ti-platform.com/cnapac/content/2017/showpage/ben-10/sa/showicon.png';
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className='col-md-6 '>
                    <div className="card m-2">
                        <img src={imageUrl} className="card-img-top p-5 w-50 rounded mx-auto d-block img-thumbnail" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title"><strong>Name:</strong>{user?.name}</h5>
                            <h5 className="card-title"><strong>Phone:</strong>{user?.phone}</h5>
                            <h5 className="card-title"><strong>Website:</strong>{user?.website}</h5>
                            <h6 className="card-title"><strong>Email:</strong> {user?.email}</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDetails;