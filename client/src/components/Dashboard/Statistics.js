import React from "react";
import { Line } from "react-chartjs-2";

const balanceChart = {
  data: {
    labels: [
      "16-07-2018",
      "17-07-2018",
      "18-07-2018",
      "19-07-2018",
      "20-07-2018",
      "21-07-2018",
      "22-07-2018",
      "23-07-2018",
      "24-07-2018",
      "25-07-2018",
      "26-07-2018",
      "27-07-2018",
      "28-07-2018",
      "29-07-2018",
      "30-07-2018",
      "31-07-2018"
    ],
    datasets: [
      {
        label: "Balance",
        data: [50, 61, 80, 50, 72, 52, 60, 41, 30, 45, 70, 40, 93, 63, 50, 62],
        backgroundColor: "transparent",
        borderWidth: 3,
        borderColor: "rgba(63,82,227,1)",
        pointBorderWidth: 0,
        pointBorderColor: "transparent",
        pointRadius: 3,
        pointBackgroundColor: "transparent",
        pointHoverBackgroundColor: "rgba(63,82,227,1)"
      }
    ]
  },
  options: {
    layout: {
      padding: {
        bottom: -1,
        left: -1
      }
    },
    legend: {
      display: false
    },
    scales: {
      yAxes: [
        {
          gridLines: {
            display: false,
            drawBorder: false
          },
          ticks: {
            beginAtZero: true,
            display: false
          }
        }
      ],
      xAxes: [
        {
          gridLines: {
            drawBorder: false,
            display: false
          },
          ticks: {
            display: false
          }
        }
      ]
    }
  }
};

const salesChart = {
  data: {
    labels: [
      "16-07-2018",
      "17-07-2018",
      "18-07-2018",
      "19-07-2018",
      "20-07-2018",
      "21-07-2018",
      "22-07-2018",
      "23-07-2018",
      "24-07-2018",
      "25-07-2018",
      "26-07-2018",
      "27-07-2018",
      "28-07-2018",
      "29-07-2018",
      "30-07-2018",
      "31-07-2018"
    ],
    datasets: [
      {
        label: "Sales",
        data: [70, 62, 44, 40, 21, 63, 82, 52, 50, 31, 70, 50, 91, 63, 51, 60],
        borderWidth: 2,
        backgroundColor: "transparent",
        borderColor: "rgba(63,82,227,1)",
        pointBorderWidth: 0,
        pointBorderColor: "transparent",
        pointRadius: 3,
        pointBackgroundColor: "transparent",
        pointHoverBackgroundColor: "rgba(63,82,227,1)"
      }
    ]
  },
  options: {
    layout: {
      padding: {
        bottom: -1,
        left: -1
      }
    },
    legend: {
      display: false
    },
    scales: {
      yAxes: [
        {
          gridLines: {
            display: false,
            drawBorder: false
          },
          ticks: {
            beginAtZero: true,
            display: false
          }
        }
      ],
      xAxes: [
        {
          gridLines: {
            drawBorder: false,
            display: false
          },
          ticks: {
            display: false
          }
        }
      ]
    }
  }
};

const Statistic = () => {
  return (
    <div className="row">
      <div className="col-lg-4 col-md-4 col-sm-12">
        <div className="card card-statistic-2">
          <div className="card-stats">
            <div className="card-stats-title">
              Order Statistics -
              <div className="dropdown d-inline">
                <a
                  className="font-weight-600 dropdown-toggle"
                  data-toggle="dropdown"
                  href="/"
                  id="orders-month">
                  August
                </a>
                <ul className="dropdown-menu dropdown-menu-sm">
                  <li className="dropdown-title">Select Month</li>
                  <li>
                    <a href="/" className="dropdown-item">
                      January
                    </a>
                  </li>
                  <li>
                    <a href="/" className="dropdown-item">
                      February
                    </a>
                  </li>
                  <li>
                    <a href="/" className="dropdown-item">
                      March
                    </a>
                  </li>
                  <li>
                    <a href="/" className="dropdown-item">
                      April
                    </a>
                  </li>
                  <li>
                    <a href="/" className="dropdown-item">
                      May
                    </a>
                  </li>
                  <li>
                    <a href="/" className="dropdown-item">
                      June
                    </a>
                  </li>
                  <li>
                    <a href="/" className="dropdown-item">
                      July
                    </a>
                  </li>
                  <li>
                    <a href="/" className="dropdown-item active">
                      August
                    </a>
                  </li>
                  <li>
                    <a href="/" className="dropdown-item">
                      September
                    </a>
                  </li>
                  <li>
                    <a href="/" className="dropdown-item">
                      October
                    </a>
                  </li>
                  <li>
                    <a href="/" className="dropdown-item">
                      November
                    </a>
                  </li>
                  <li>
                    <a href="/" className="dropdown-item">
                      December
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="card-stats-items">
              <div className="card-stats-item">
                <div className="card-stats-item-count">24</div>
                <div className="card-stats-item-label">Pending</div>
              </div>
              <div className="card-stats-item">
                <div className="card-stats-item-count">12</div>
                <div className="card-stats-item-label">Shipping</div>
              </div>
              <div className="card-stats-item">
                <div className="card-stats-item-count">23</div>
                <div className="card-stats-item-label">Completed</div>
              </div>
            </div>
          </div>
          <div className="card-icon shadow-primary bg-primary">
            <i className="fas fa-archive"></i>
          </div>
          <div className="card-wrap">
            <div className="card-header">
              <h4>Total Orders</h4>
            </div>
            <div className="card-body">59</div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-4 col-sm-12">
        <div className="card card-statistic-2">
          <div className="card-chart">
            <Line data={balanceChart.data} options={balanceChart.options} />
          </div>
          <div className="card-icon shadow-primary bg-primary">
            <i className="fas fa-dollar-sign"></i>
          </div>
          <div className="card-wrap">
            <div className="card-header">
              <h4>Balance</h4>
            </div>
            <div className="card-body">$187,13</div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-4 col-sm-12">
        <div className="card card-statistic-2">
          <div className="card-chart">
            <Line data={salesChart.data} options={salesChart.options} />
          </div>
          <div className="card-icon shadow-primary bg-primary">
            <i className="fas fa-shopping-bag"></i>
          </div>
          <div className="card-wrap">
            <div className="card-header">
              <h4>Sales</h4>
            </div>
            <div className="card-body">4,732</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistic;
