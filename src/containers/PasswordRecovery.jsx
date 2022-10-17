import React from 'react';
import '@styles/PasswordRecovery.scss';

const PasswordRecovery = () => {
  return (
    <div className="password-recovery">
      <div className="form-container">
        <img src="./assets/logos/logo_yard_sale.svg" alt="logo" className="logo" />

        <h1 className="title">Password recovery</h1>
        <p className="subtitle">
          Inform the email address used to create your account
        </p>

        <form action="">
          <label className="label" for="email">Email address</label>
          <input className="input" type="email" name="email" id="email" placeholder="camilayokoo@gmail.com" />

          <button className="primary-button submit-button">Submit</button>
        </form>

        <a className="link" href="/login">Back to log in</a>
      </div>
    </div>
  );
}

export default PasswordRecovery;