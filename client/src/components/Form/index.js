import React from "react";
import CreatePost from "./CreatePost";
import Navbar from "../General/Navbar";
import Sidebar from "../General/Sidebar";
import Footer from "../General/Footer";

const Form = () => {
  return (
    <div id="app">
      <div className="main-wrapper container">
        <Navbar />
        <Sidebar />
        <div className="main-content">
          <section className="section">
            <CreatePost />
          </section>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Form;
