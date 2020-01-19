import React from "react";

import ava5 from "../../assets/img/avatar/avatar-5.png";

const AllPosts = () => {
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
                    <th>Created At</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
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
                      Laravel 5 Tutorial: Introduction
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
                      <a href="/">Web Developer</a>,<a href="/">Tutorial</a>
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
                        <div className="d-inline-block ml-1">Rizal Fakhri</div>
                      </a>
                    </td>
                    <td>2018-01-20</td>
                    <td>
                      <div className="badge badge-primary">Published</div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="custom-checkbox custom-control">
                        <input
                          type="checkbox"
                          data-checkboxes="mygroup"
                          className="custom-control-input"
                          id="checkbox-3"
                        />
                        <label
                          htmlFor="checkbox-3"
                          className="custom-control-label">
                          &nbsp;
                        </label>
                      </div>
                    </td>
                    <td>
                      Laravel 5 Tutorial: Installing
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
                      <a href="/">Web Developer</a>,<a href="/">Tutorial</a>
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
                        />
                        <div className="d-inline-block ml-1">Rizal Fakhri</div>
                      </a>
                    </td>
                    <td>2018-01-20</td>
                    <td>
                      <div className="badge badge-primary">Published</div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="custom-checkbox custom-control">
                        <input
                          type="checkbox"
                          data-checkboxes="mygroup"
                          className="custom-control-input"
                          id="checkbox-4"
                        />
                        <label
                          htmlFor="checkbox-4"
                          className="custom-control-label">
                          &nbsp;
                        </label>
                      </div>
                    </td>
                    <td>
                      Laravel 5 Tutorial: MVC
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
                      <a href="/">Web Developer</a>,<a href="/">Tutorial</a>
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
                        <div className="d-inline-block ml-1">Rizal Fakhri</div>
                      </a>
                    </td>
                    <td>2018-01-20</td>
                    <td>
                      <div className="badge badge-primary">Published</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllPosts;
