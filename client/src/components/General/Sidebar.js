import React from "react";

const Sidebar = () => {
  return (
    <nav className="navbar navbar-secondary navbar-expand-lg">
      <div className="container">
        <ul className="navbar-nav">
          <li className="nav-item dropdown">
            <a
              href="/"
              data-toggle="dropdown"
              className="nav-link has-dropdown">
              <i className="fas fa-home"></i>
              <span>Home</span>
            </a>
            <ul className="dropdown-menu">
              <li className="nav-item">
                <a href="index-0.html" className="nav-link">
                  General Dashboard
                </a>
              </li>
              <li className="nav-item">
                <a href="index.html" className="nav-link">
                  Ecommerce Dashboard
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
