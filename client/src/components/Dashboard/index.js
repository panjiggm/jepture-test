import React from "react";
import Statistic from "./Statistics";
import Chart from "./Chart";
import Comments from "./Comments";
import TopCountries from "./TopCountries";
import Invoices from "./Invoices";
import CustomersHelp from "./CustomersHelp";

const Dashboard = () => {
  return (
    <div className="main-content">
      <section className="section">
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
  );
};

export default Dashboard;
