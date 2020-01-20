import React from "react";
import Navbar from "../General/Navbar";
import Sidebar from "../General/Sidebar";
import Footer from "../General/Footer";
import Body from "./Body";

const Home = () => {
  return (
    <div id="app">
      <div className="main-wrapper container">
        <Navbar />
        <Sidebar />
        <Body />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
