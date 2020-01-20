import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchPosts } from "../../store/actions/postAction";
import ava5 from "../../assets/img/avatar/avatar-5.png";

const AllPosts = ({ fetchPosts, posts }) => {
  useEffect(() => {
    fetchPosts();
  });

  return (
    <div className="row mt-4">
      <div className="col-12">
        <div className="card">
          <div className="card-header">
            <h4>All Posts</h4>
          </div>
          <div className="card-body">
            <div className="float-left">
              <select className="form-control selectric">
                <option>Action For Selected</option>
                <option>Move to Draft</option>
                <option>Move to Pending</option>
                <option>Delete Pemanently</option>
              </select>
            </div>
            <div className="float-right">
              <form>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search"
                  />
                  <div className="input-group-append">
                    <button className="btn btn-primary">
                      <i className="fas fa-search"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>

            <div className="clearfix mb-3"></div>

            <div className="table-responsive">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th className="text-center pt-2">
                      <div className="custom-checkbox custom-checkbox-table custom-control">
                        <input
                          type="checkbox"
                          data-checkboxes="mygroup"
                          data-checkbox-role="dad"
                          className="custom-control-input"
                          id="checkbox-all"
                        />
                        <label
                          htmlFor="checkbox-all"
                          className="custom-control-label">
                          &nbsp;
                        </label>
                      </div>
                    </th>
                    <th>Title</th>
                    <th>Category</th>
                    <th>Author</th>
                    <th>Created/Updated At</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {posts.length > 0 ? (
                    posts.map(post => {
                      return (
                        <tr key={post.id}>
                          <td>
                            <div className="custom-checkbox custom-control">
                              <input
                                type="checkbox"
                                data-checkboxes="mygroup"
                                className="custom-control-input"
                                id="checkbox-2"
                              />
                              <label
                                htmlFor="checkbox-2"
                                className="custom-control-label">
                                &nbsp;
                              </label>
                            </div>
                          </td>
                          <td>
                            {post.title}
                            <div className="table-links">
                              <a href="/">View</a>
                              <div className="bullet"></div>
                              <a href="/">Edit</a>
                              <div className="bullet"></div>
                              <a href="/" className="text-danger">
                                Trash
                              </a>
                            </div>
                          </td>
                          <td>
                            <p>{post.category}</p>
                          </td>
                          <td>
                            <a href="/">
                              <img
                                alt="pict"
                                src={ava5}
                                className="rounded-circle"
                                width="35"
                                data-toggle="title"
                                title=""
                              />{" "}
                              <div className="d-inline-block ml-1">
                                {post.author}
                              </div>
                            </a>
                          </td>
                          <td>{post.created_at}</td>
                          <td>
                            <div
                              className={
                                post.status === "Draft"
                                  ? "badge badge-danger"
                                  : post.status === "Pending"
                                  ? "badge badge-warning"
                                  : "badge badge-primary"
                              }>
                              {post.status}
                            </div>
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                    <div>Tidak ada Postigan</div>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    posts: Object.values(state.posts)
  };
};

export default connect(mapStateToProps, { fetchPosts })(AllPosts);
