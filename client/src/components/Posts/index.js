import React from "react";

import AllPosts from "./AllPosts";

const Posts = () => {
  return (
    <div className="main-content">
      <section className="section">
        <div className="section-header">
          <h1>Posts</h1>
          <div className="section-header-button">
            <a href="features-post-create.html" className="btn btn-primary">
              Add New
            </a>
          </div>
          <div className="section-header-breadcrumb">
            <div className="breadcrumb-item active">
              <a href="/">Dashboard</a>
            </div>
            <div className="breadcrumb-item">
              <a href="/">Posts</a>
            </div>
            <div className="breadcrumb-item">All Posts</div>
          </div>
        </div>
        <div className="section-body">
          <div className="row">
            <div className="col-12">
              <div className="card mb-0">
                <div className="card-body">
                  <ul className="nav nav-pills">
                    <li className="nav-item">
                      <a className="nav-link active" href="/">
                        All <span className="badge badge-white">5</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/">
                        Draft <span className="badge badge-primary">1</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/">
                        Pending <span className="badge badge-primary">1</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/">
                        Trash <span className="badge badge-primary">0</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* Rest Here... */}
          <AllPosts />
        </div>
      </section>
    </div>
  );
};

export default Posts;
