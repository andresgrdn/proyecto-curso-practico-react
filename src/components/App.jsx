import React from "react";
import Layout from '@containers/Layout';
import Login from '@containers/Login';
import '@styles/global.css';

const App = () => {
  const view = (
    <Layout>
      <Login />
    </Layout>
  );

  return view;
}

export default App;