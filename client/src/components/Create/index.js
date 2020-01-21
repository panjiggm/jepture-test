import React from "react";

import CreatePost from "./CreatePost";
import Navbar from "../General/Navbar";
import Sidebar from "../General/Sidebar";
import Footer from "../General/Footer";

const Create = () => {
  return (
    <div id="app">
      <div className="main-wrapper container">
        <Navbar />
        <Sidebar />
        <div className="main-content">
          <section className="section">
            <div className="section-header">
              <h1>Create</h1>
              <div className="section-header-button">
                <a href="/app" className="btn btn-dark">
                  Kembali
                </a>
              </div>
            </div>
            <CreatePost />
          </section>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Create;
