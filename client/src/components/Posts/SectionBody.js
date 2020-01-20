import React from "react";

import AllPosts from "./AllPosts";

const SectionBody = () => {
  return (
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
      <AllPosts />
    </div>
  );
};

export default SectionBody;
