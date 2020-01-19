import React from "react";

const CustomersHelp = () => {
  return (
    <div className="col-md-4">
      <div className="card card-hero">
        <div className="card-header">
          <div className="card-icon">
            <i className="far fa-question-circle"></i>
          </div>
          <h4>14</h4>
          <div className="card-description">Customers need help</div>
        </div>
        <div className="card-body p-0">
          <div className="tickets-list">
            <a href="/" className="ticket-item">
              <div className="ticket-title">
                <h4>My order hasn't arrived yet</h4>
              </div>
              <div className="ticket-info">
                <div>Laila Tazkiah</div>
                <div className="bullet"></div>
                <div className="text-primary">1 min ago</div>
              </div>
            </a>
            <a href="/" className="ticket-item">
              <div className="ticket-title">
                <h4>Please cancel my order</h4>
              </div>
              <div className="ticket-info">
                <div>Rizal Fakhri</div>
                <div className="bullet"></div>
                <div>2 hours ago</div>
              </div>
            </a>
            <a href="/" className="ticket-item">
              <div className="ticket-title">
                <h4>Do you see my mother?</h4>
              </div>
              <div className="ticket-info">
                <div>Syahdan Ubaidillah</div>
                <div className="bullet"></div>
                <div>6 hours ago</div>
              </div>
            </a>
            <a href="features-tickets.html" className="ticket-item ticket-more">
              View All <i className="fas fa-chevron-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomersHelp;
