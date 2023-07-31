import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { signup } from '../services/auth';
import '../styles/Signup.css';

const Signup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const history = useHistory();

  const handleSignup = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await signup(email, password);
      history.push('/dashboard');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="signup">
      <form onSubmit={handleSignup}>
        <h1>Sign Up</h1>
        {error && <p>{error}</p>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;