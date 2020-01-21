import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchPosts } from "../../store/actions/postAction";
import AllPosts from "./AllPosts";

const SectionBody = ({ fetchPosts, posts }) => {
  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <div className="section-body">
      <div className="row">
        <div className="col-12">
          <div className="card mb-0">
            <div className="card-body">
              <ul className="nav nav-pills">
                <li className="nav-item">
                  <a className="nav-link active" href="/">
                    All
                    <span className="badge badge-white">{posts.length}</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Draft
                    <span className="badge badge-danger">
                      {posts.filter(post => post.status === "Draft").length}
                    </span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Pending
                    <span className="badge badge-warning">
                      {posts.filter(post => post.status === "Pending").length}
                    </span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Publish
                    <span className="badge badge-primary">
                      {posts.filter(post => post.status === "Publish").length}
                    </span>
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

const mapStateToProps = state => {
  return {
    posts: Object.values(state.posts)
  };
};

export default connect(mapStateToProps, { fetchPosts })(SectionBody);
