import React from "react";
import Header from "@containers/Header";
import Layout from "@containers/Layout";
import "@styles/NotFound.scss";

const NotFound = () => {
  return (
    <>
      <Header />
      <Layout>
        <div className="NotFound">
          <h2>Error 404</h2>
          <p> Page not found</p>
        </div>
      </Layout>
    </>
  );
}

export default NotFound;
