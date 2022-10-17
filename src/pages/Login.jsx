import React from "react";
import Layout from "@containers/Layout";
import Header from "@containers/Header";
import LoginForm from "@containers/LoginForm";
import "@styles/Login.scss";

const Login = () => {
  return (
    <Layout>
      <Header />
      <LoginForm />
    </Layout>
  );
}

export default Login;
