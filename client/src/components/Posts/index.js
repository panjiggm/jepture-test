import React from "react";

import SectionHeader from "./SectionHeader";
import SectionBody from "./SectionBody";
import Navbar from "../General/Navbar";
import Sidebar from "../General/Sidebar";
import Footer from "../General/Footer";

const Posts = () => {
  return (
    <div id="app">
      <div className="main-wrapper container">
        <Navbar />
        <Sidebar />
        <div className="main-content">
          <section className="section">
            <SectionHeader />
            <SectionBody />
          </section>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Posts;
