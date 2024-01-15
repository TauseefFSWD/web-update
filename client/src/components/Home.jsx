/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Home = () => {
    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers);
    
    const removerUser =  _id => {
        console.log(_id);
        fetch(`https://tauseef-backend.onrender.com/users/${_id}`, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            const remaining =  users.filter(user => user._id !== _id);
            setUsers(remaining);
        })
    }

    return (
        <div>
            <h2>TOTAL USER COUNT : {users.length}</h2>
            <div className="user-card">
                {
                    users.map(user => <div key={user._id} className="cards">
                        <img src={user.photoURL} alt="" />
                        <h4>{user.name}</h4>
                        <p>{user.email}</p>
                        <Link to={`/update/${user._id}`}><button className="update">Update</button></Link>
                        <button onClick={() => removerUser(user._id)}>Remove</button>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Home;
