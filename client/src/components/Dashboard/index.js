import React, { Fragment } from "react";
import Navbar from "../General/Navbar";
import Sidebar from "../General/Sidebar";
import Statistic from "./Statistics";
import Chart from "./Chart";
import Comments from "./Comments";
import TopCountries from "./TopCountries";
import Invoices from "./Invoices";
import CustomersHelp from "./CustomersHelp";
import AddNew from "./AddNew";
import Footer from "../General/Footer";

const Dashboard = () => {
  return (
    <Fragment>
      <div className="main-wrapper container">
        <Navbar />
        <Sidebar />
        <div className="main-content">
          <section className="section">
            <AddNew />
            <Statistic />
            <Chart />
            <div className="row">
              <Invoices />
              <CustomersHelp />
            </div>
            <div className="row">
              <Comments />
              <TopCountries />
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </Fragment>
  );
};

export default Dashboard;
