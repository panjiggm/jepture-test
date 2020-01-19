import React from "react";
import { Link } from "react-router-dom";

const Body = () => {
  return (
    <div className="main-content">
      <section className="section">
        <div className="section-body">
          <h2 className="section-title">Selamat Datang</h2>
          <p className="section-lead">
            This page is just an example for you to create your own page.
          </p>
          <div className="row">
            <div className="col-12 mb-4">
              <div className="hero bg-primary text-white">
                <div className="hero-inner">
                  <h2>Halo!</h2>
                  <p className="lead">
                    You almost arrived, complete the information about your
                    account to complete registration.
                  </p>
                  <div className="mt-4">
                    <Link
                      to="/login"
                      className="btn btn-outline-white btn-lg btn-icon icon-left">
                      <i className="far fa-user"></i> Silahkan Login
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Body;
