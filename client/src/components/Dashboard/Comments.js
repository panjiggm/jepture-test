import React from "react";

import ava1 from "../../assets/img/avatar/avatar-1.png";
import ava2 from "../../assets/img/avatar/avatar-2.png";

const Comments = () => {
  return (
    <div className="col-12 col-sm-12 col-lg-6">
      <div className="card">
        <div className="card-header">
          <h4>Comments</h4>
        </div>
        <div className="card-body">
          <ul className="list-unstyled list-unstyled-border list-unstyled-noborder">
            <li className="media">
              <img
                alt="pict"
                className="mr-3 rounded-circle"
                width="70"
                src={ava1}
              />
              <div className="media-body">
                <div className="media-right">
                  <div className="text-primary">Approved</div>
                </div>
                <div className="media-title mb-1">Rizal Fakhri</div>
                <div className="text-time">Yesterday</div>
                <div className="media-description text-muted">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                </div>
                <div className="media-links">
                  <a href="/">View</a>
                  <div className="bullet"></div>
                  <a href="/">Edit</a>
                  <div className="bullet"></div>
                  <a href="/" className="text-danger">
                    Trash
                  </a>
                </div>
              </div>
            </li>
            <li className="media">
              <img
                alt="pict"
                className="mr-3 rounded-circle"
                width="70"
                src={ava2}
              />
              <div className="media-body">
                <div className="media-right">
                  <div className="text-warning">Pending</div>
                </div>
                <div className="media-title mb-1">Bambang Uciha</div>
                <div className="text-time">Yesterday</div>
                <div className="media-description text-muted">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                </div>
                <div className="media-links">
                  <a href="/">View</a>
                  <div className="bullet"></div>
                  <a href="/">Edit</a>
                  <div className="bullet"></div>
                  <a href="/" className="text-danger">
                    Trash
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Comments;
