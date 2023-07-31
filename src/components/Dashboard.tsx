import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { User } from '../types/user';
import { logout } from '../services/auth';
import '../styles/Dashboard.css';

const Dashboard: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const history = useHistory();

  useEffect(() => {
    // Fetch user data from Firebase here and set it to user state
  }, []);

  const handleLogout = async () => {
    try {
      await logout();
      history.push('/login');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="dashboard">
      <h1>Welcome, {user?.name}</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;