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
              <i className="fas fa-fire"></i>
              <span>Halo</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
