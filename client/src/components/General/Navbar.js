import React, { Fragment } from "react";

const Navbar = () => {
  return (
    <Fragment>
      <div className="navbar-bg"></div>
      <nav className="navbar navbar-expand-lg main-navbar">
        <a href="index.html" className="navbar-brand sidebar-gone-hide">
          Jepture
        </a>
        <div className="navbar-nav">
          <a
            href="/"
            className="nav-link sidebar-gone-show"
            data-toggle="sidebar">
            <i className="fas fa-bars"></i>
          </a>
        </div>
        <div className="nav-collapse">
          <a
            className="sidebar-gone-show nav-collapse-toggle nav-link"
            href="/">
            <i className="fas fa-ellipsis-v"></i>
          </a>
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a href="/" className="nav-link">
                CRUD Application
              </a>
            </li>
          </ul>
        </div>
        <form className="form-inline ml-auto">
          <ul className="navbar-nav">
            <li>
              <a
                href="/"
                data-toggle="search"
                className="nav-link nav-link-lg d-sm-none">
                <i className="fas fa-search"></i>
              </a>
            </li>
          </ul>
          <div className="search-element">
            <input
              className="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search"
              data-width="250"
            />
            <button className="btn" type="submit">
              <i className="fas fa-search"></i>
            </button>
            <div className="search-backdrop"></div>
          </div>
        </form>
        <ul className="navbar-nav navbar-right">
          <li className="dropdown dropdown-list-toggle">
            <a href="/" data-toggle="dropdown" className="nav-link nav-link-lg">
              <i className="far fa-envelope"></i>
            </a>
          </li>
          <li className="dropdown dropdown-list-toggle">
            <a href="/" data-toggle="dropdown" className="nav-link nav-link-lg">
              <i className="far fa-bell"></i>
            </a>
          </li>
          <li className="dropdown">
            <a
              href="/"
              data-toggle="dropdown"
              className="nav-link dropdown-toggle nav-link-lg nav-link-user">
              <img
                alt="pict"
                src="../assets/img/avatar/avatar-1.png"
                className="rounded-circle mr-1"
              />
              <div className="d-sm-none d-lg-inline-block">Hi, Ujang Maman</div>
            </a>
            <div className="dropdown-menu dropdown-menu-right">
              <div className="dropdown-title">Logged in 5 min ago</div>
              <a
                href="features-profile.html"
                className="dropdown-item has-icon">
                <i className="far fa-user"></i> Profile
              </a>
              <a
                href="features-activities.html"
                className="dropdown-item has-icon">
                <i className="fas fa-bolt"></i> Activities
              </a>
              <a
                href="features-settings.html"
                className="dropdown-item has-icon">
                <i className="fas fa-cog"></i> Settings
              </a>
              <div className="dropdown-divider"></div>
              <a href="/" className="dropdown-item has-icon text-danger">
                <i className="fas fa-sign-out-alt"></i> Logout
              </a>
            </div>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
};

export default Navbar;
