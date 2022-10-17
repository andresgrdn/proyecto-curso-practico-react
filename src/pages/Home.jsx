import React from "react";
import Layout from "@containers/Layout";
import Header from "@containers/Header";
import FilterBar from "@containers/FilterBar";
import Products from "@containers/Products";

const Home = () => {
  return (
    <Layout>
      <Header />
      <FilterBar />
      <Products />
    </Layout>
  );
}

export default Home;
