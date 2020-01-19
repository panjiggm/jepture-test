import React, { useState } from "react";
import Navbar from "../General/Navbar";
import Sidebar from "../General/Sidebar";
import Footer from "../General/Footer";
import Body from "./Body";

import Dashboard from "../Dashboard";
import Posts from "../Posts";
import Form from "../Form";

const Home = () => {
  const [position, setPosition] = useState("Home");
  const [isLogin, setIsLogin] = useState(false);
  const [errorLogin, setErrorLogin] = useState(false);

  return (
    <div id="app">
      <div className="main-wrapper container">
        <Navbar position={position} />
        <Sidebar />
        <Body />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
