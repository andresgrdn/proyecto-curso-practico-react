import React from "react";
import '@styles/LoginForm.scss';
import logo from '@logos/logo_yard_sale.svg';

const LoginForm = () => {
  return (
    <div className="LoginForm">
      <div className="form-container">
        <img src={logo} alt="logo" className="logo" />

        <form action="/">
          <label htmlFor="email" className="label">Email address</label>
          <input type="email" id="email" placeholder="camilayokoo@gmail.com" className="input input-email" autoComplete="username" />

          <label htmlFor="password" className="label">Password</label>
          <input type="password" id="password" placeholder="*********" className="input input-password" autoComplete="current-password" />

          <input type="submit" value="Log in" className="primary-button LoginForm-button" />

          <a href="/password-recovery">Forgot my password</a>
        </form>

        <button className="secondary-button signup-button">Sign up</button>
      </div>
    </div>
  );
}

export default LoginForm;