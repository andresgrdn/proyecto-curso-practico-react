import React from "react";
import Layout from "@containers/Layout";
import Header from "@containers/Header";
import PasswordRecovery from "@containers/PasswordRecovery";

const PasswordRecoveryPage = () => {
  return (
    <Layout>
      <Header />
      <PasswordRecovery />
    </Layout>
  );
}

export default PasswordRecoveryPage;
