import React from "react";
import Layout from "@containers/Layout";
import Header from "@containers/Header";
import PasswordRecoveryEmailSent from "@containers/PasswordRecoveryEmailSent";

const PasswordRecoveryConfirmation = () => {
  return (
    <Layout>
      <Header />
      <PasswordRecoveryEmailSent />
    </Layout>
  );
}

export default PasswordRecoveryConfirmation;
