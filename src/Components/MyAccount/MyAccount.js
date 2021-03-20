import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../../App';

const MyAccount = () => {
    const [user] = useContext(UserContext)
    return (
        <div>
            <h1>This is {user.name} account</h1>
        </div>
    );
};

export default MyAccount;