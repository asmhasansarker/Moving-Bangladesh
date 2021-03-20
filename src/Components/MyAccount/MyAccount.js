import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../../App';

const MyAccount = () => {
    const [user] = useContext(UserContext)
    return (
        <div className="container">
            <h1 className="text-center">Welcome, {user.name}</h1>
        </div>
    );
};

export default MyAccount;