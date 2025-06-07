import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

function Profile() {
  const { user } = useContext(UserContext); // Destructure properly

  return (
    <div className="p-6 max-w-md mx-auto bg-white dark:bg-gray-900 rounded-xl shadow-md space-y-4">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Profile</h2>
      
      {user ? (
        <div className="text-gray-700 dark:text-gray-300 space-y-2">
          <div><strong>Username:</strong> {user.username}</div>
          <div><strong>Password:</strong> {user.password}</div>
        </div>
      ) : (
        <p className="text-red-500">User not logged in.</p>
      )}
    </div>
  );
}

export default Profile;
