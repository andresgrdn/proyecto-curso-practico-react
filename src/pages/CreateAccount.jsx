import React from "react";
import Layout from "@containers/Layout";
import Header from "@containers/Header";
import CreateAccountForm from "@containers/CreateAccountForm";

const Home = () => {
  return (
    <Layout>
      <Header />
      <CreateAccountForm />
    </Layout>
  );
}

export default Home;
