import React from "react";

import { Line } from "react-chartjs-2";

import product3 from "../../assets/img/products/product-3-50.png";
import product4 from "../../assets/img/products/product-4-50.png";
import product1 from "../../assets/img/products/product-1-50.png";
import product5 from "../../assets/img/products/product-5-50.png";

const chart = {
  data: {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August"
    ],
    datasets: [
      {
        label: "Sales",
        data: [3200, 1800, 4305, 3022, 6310, 5120, 5880, 6154],
        backgroundColor: "rgba(63,82,227,.8)",
        borderWidth: 0,
        borderColor: "transparent",
        pointBorderWidth: 0,
        pointRadius: 3.5,
        pointBackgroundColor: "transparent",
        pointHoverBackgroundColor: "rgba(63,82,227,.8)"
      },
      {
        label: "Budget",
        data: [2207, 3403, 2200, 5025, 2302, 4208, 3880, 4880],
        backgroundColor: "rgba(254,86,83,.7)",
        borderWidth: 0,
        borderColor: "transparent",
        pointBorderWidth: 0,
        pointRadius: 3.5,
        pointBackgroundColor: "transparent",
        pointHoverBackgroundColor: "rgba(254,86,83,.8)"
      }
    ]
  },
  options: {
    legend: {
      display: false
    },
    scales: {
      yAxes: [
        {
          gridLines: {
            // display: false,
            drawBorder: false,
            color: "#f2f2f2"
          },
          ticks: {
            beginAtZero: true,
            stepSize: 1500,
            callback: function(value, index, values) {
              return "$" + value;
            }
          }
        }
      ],
      xAxes: [
        {
          gridLines: {
            display: false,
            tickMarkLength: 15
          }
        }
      ]
    }
  }
};

const Chart = () => {
  return (
    <div className="row">
      <div className="col-lg-8">
        <div className="card">
          <div className="card-header">
            <h4>Budget vs Sales</h4>
          </div>
          <div className="card-body">
            <Line
              options={({ responsive: true }, chart.options)}
              data={chart.data}
            />
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="card gradient-bottom">
          <div className="card-header">
            <h4>Top 5 Products</h4>
            <div className="card-header-action dropdown">
              <a
                href="/"
                data-toggle="dropdown"
                className="btn btn-danger dropdown-toggle">
                Month
              </a>
              <ul className="dropdown-menu dropdown-menu-sm dropdown-menu-right">
                <li className="dropdown-title">Select Period</li>
                <li>
                  <a href="/" className="dropdown-item">
                    Today
                  </a>
                </li>
                <li>
                  <a href="/" className="dropdown-item">
                    Week
                  </a>
                </li>
                <li>
                  <a href="/" className="dropdown-item active">
                    Month
                  </a>
                </li>
                <li>
                  <a href="/" className="dropdown-item">
                    This Year
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="card-body" id="top-5-scroll">
            <ul className="list-unstyled list-unstyled-border">
              <li className="media">
                <img
                  className="mr-3 rounded"
                  width="55"
                  src={product3}
                  alt="product"
                />
                <div className="media-body">
                  <div className="float-right">
                    <div className="font-weight-600 text-muted text-small">
                      86 Sales
                    </div>
                  </div>
                  <div className="media-title">oPhone S9 Limited</div>
                  <div className="mt-1">
                    <div className="budget-price">
                      <div
                        className="budget-price-square bg-primary"
                        data-width="64%"></div>
                      <div className="budget-price-label">$68,714</div>
                    </div>
                    <div className="budget-price">
                      <div
                        className="budget-price-square bg-danger"
                        data-width="43%"></div>
                      <div className="budget-price-label">$38,700</div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="media">
                <img
                  className="mr-3 rounded"
                  width="55"
                  src={product4}
                  alt="product"
                />
                <div className="media-body">
                  <div className="float-right">
                    <div className="font-weight-600 text-muted text-small">
                      67 Sales
                    </div>
                  </div>
                  <div className="media-title">iBook Pro 2018</div>
                  <div className="mt-1">
                    <div className="budget-price">
                      <div
                        className="budget-price-square bg-primary"
                        data-width="84%"></div>
                      <div className="budget-price-label">$107,133</div>
                    </div>
                    <div className="budget-price">
                      <div
                        className="budget-price-square bg-danger"
                        data-width="60%"></div>
                      <div className="budget-price-label">$91,455</div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="media">
                <img
                  className="mr-3 rounded"
                  width="55"
                  src={product1}
                  alt="product"
                />
                <div className="media-body">
                  <div className="float-right">
                    <div className="font-weight-600 text-muted text-small">
                      63 Sales
                    </div>
                  </div>
                  <div className="media-title">Headphone Blitz</div>
                  <div className="mt-1">
                    <div className="budget-price">
                      <div
                        className="budget-price-square bg-primary"
                        data-width="34%"></div>
                      <div className="budget-price-label">$3,717</div>
                    </div>
                    <div className="budget-price">
                      <div
                        className="budget-price-square bg-danger"
                        data-width="28%"></div>
                      <div className="budget-price-label">$2,835</div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="media">
                <img
                  className="mr-3 rounded"
                  width="55"
                  src={product3}
                  alt="product"
                />
                <div className="media-body">
                  <div className="float-right">
                    <div className="font-weight-600 text-muted text-small">
                      28 Sales
                    </div>
                  </div>
                  <div className="media-title">oPhone X Lite</div>
                  <div className="mt-1">
                    <div className="budget-price">
                      <div
                        className="budget-price-square bg-primary"
                        data-width="45%"></div>
                      <div className="budget-price-label">$13,972</div>
                    </div>
                    <div className="budget-price">
                      <div
                        className="budget-price-square bg-danger"
                        data-width="30%"></div>
                      <div className="budget-price-label">$9,660</div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="media">
                <img
                  className="mr-3 rounded"
                  width="55"
                  src={product5}
                  alt="product"
                />
                <div className="media-body">
                  <div className="float-right">
                    <div className="font-weight-600 text-muted text-small">
                      19 Sales
                    </div>
                  </div>
                  <div className="media-title">Old Camera</div>
                  <div className="mt-1">
                    <div className="budget-price">
                      <div
                        className="budget-price-square bg-primary"
                        data-width="35%"></div>
                      <div className="budget-price-label">$7,391</div>
                    </div>
                    <div className="budget-price">
                      <div
                        className="budget-price-square bg-danger"
                        data-width="28%"></div>
                      <div className="budget-price-label">$5,472</div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="card-footer pt-3 d-flex justify-content-center">
            <div className="budget-price justify-content-center">
              <div
                className="budget-price-square bg-primary"
                data-width="20"></div>
              <div className="budget-price-label">Selling Price</div>
            </div>
            <div className="budget-price justify-content-center">
              <div
                className="budget-price-square bg-danger"
                data-width="20"></div>
              <div className="budget-price-label">Budget Price</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chart;
