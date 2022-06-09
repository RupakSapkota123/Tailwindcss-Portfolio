import React from "react";
import ThemeToggler from "./components/shared/ThemeToggler";
import Layout from "./layout/Layout";

const App = () => {
  return (
    <Layout>
      <p className="text-red">Hello World</p>
      <ThemeToggler />
    </Layout>
  );
};

export default App;
