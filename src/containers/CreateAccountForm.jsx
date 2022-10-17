import React from "react";
import "@styles/CreateAccountForm.scss";
import "@styles/PrimaryButton.scss";

const CreateAccountForm = () => {
  return (
    <div class="CreateAccountForm">
      <div class="CreateAccountForm__form-container">
        <h1 class="CreateAccountForm__title">My account</h1>

        <form action="/" class="form">
          <label for="name" class="label">Name</label>
          <input type="text" id="name" placeholder="Camila Yokoo" class="input input-name" />

          <label for="email" class="label">Email address</label>
          <input type="email" id="email" placeholder="camilayokoo@gmail.com" class="input input-email" />

          <label for="password" class="label">Password</label>
          <input type="password" id="password" placeholder="*********" class="input input-password" />

          <input type="submit" value="Create account" class="primary-button input-create-account-button" />
        </form>
      </div>
    </div>
  );
}

export default CreateAccountForm;