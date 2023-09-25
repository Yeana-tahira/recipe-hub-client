import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import useTitle from '../../hooks/useTitle';
import MyProfile from './MyProfile';

const Profile = () => {
    useTitle('Profile')
    const { user } = useContext(AuthContext);

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then((response) => response.json())
            .then((data) => setUsers(data));
    }, []);
    console.log(users);

    return (
        <div>
            {
                users.filter(filteredUser => filteredUser.email === user.email).map(selectedUser => <MyProfile
                key={selectedUser._id}
                selectedUser={selectedUser}
                ></MyProfile>)
            }
        </div>
    );
};

export default Profile;