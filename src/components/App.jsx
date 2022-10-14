import React from "react";
import Layout from '@containers/Layout';
import Login from '@containers/Login';
import '@styles/global.css';
import PasswordRecovery2 from "../containers/PasswordRecovery2";

const App = () => {
  return (
    <Layout>
      <Login />
      <PasswordRecovery2 />
    </Layout>
  );
}

export default App;