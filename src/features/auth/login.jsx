/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import Switch from 'react-switch';
import styles from './Auth.module.css';

const logo = '/assets/alfredob.png';

function Login() {
  const [check, setCheck] = useState(false);

  const initialState = {
    email: '',
    password: '',
  };

  const [credential, setCredential] = useState(initialState);

  const handleInputChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setCredential({ ...credential, [name]: value });
  };

  const handleCheckedChange = () => setCheck(!check);

  const handleAuthSubmit = (event) => {
    event.preventDefault();
    // console.log(credential);

    setCredential(initialState);
  };

  return (
    <div className={styles.loginContainer}>
      <div>
        <span>Light</span>
        <Switch onChange={handleCheckedChange} checked={check} />
        <span>Dark</span>
      </div>
      <div className="logo-container">
        <img src={logo} alt="logo" className={styles.logoThumbnail} />
        <div className="company-name">
          <span>Air Pollution</span>
          <span>portfolio analysis</span>
        </div>
        <div className="login-content">
          <p className="login-cta">login with your dribble account</p>
        </div>
        <form action="#" method="post" onSubmit={handleAuthSubmit}>
          <input
            name="email"
            placeholder="email"
            value={credential.email}
            type="email"
            onChange={handleInputChange}
            required
          />
          <input
            name="password"
            placeholder="password"
            value={credential.password}
            onChange={handleInputChange}
            type="password"
            required
          />

          <input type="submit" />
        </form>
      </div>
    </div>
  );
}

export default Login;
