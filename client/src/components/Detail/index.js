import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPost } from "../../store/actions/postAction";

import Navbar from "../General/Navbar";
import Sidebar from "../General/Sidebar";
import Footer from "../General/Footer";
import ava1 from "../../assets/img/avatar/avatar-1.png";
import { Link } from "react-router-dom";

const Detail = props => {
  useEffect(() => {
    props.fetchPost(props.match.params.id);
  }, []);

  return (
    <div id="app">
      <div className="main-wrapper container">
        <Navbar />
        <Sidebar />
        <div className="main-content">
          <section className="section">
            <h2 className="section-title">Post Detail</h2>
            <p className="section-lead">
              This page is just an example for you to create your own page.
            </p>
            <div className="card author-box card-primary">
              <div className="card-body">
                <div className="author-box-left">
                  <img
                    alt="pict"
                    src={ava1}
                    className="rounded-circle author-box-picture"
                  />
                  <div className="clearfix"></div>
                  <button className="btn btn-primary mt-3 follow-btn">
                    {props.posts && props.posts.status}
                  </button>
                </div>
                <div className="author-box-details">
                  <div className="author-box-name">
                    <p>{props.posts && props.posts.author} </p>
                  </div>
                  <div className="author-box-job">
                    {props.posts && props.posts.title}
                  </div>
                  <div className="author-box-description">
                    <p>{props.posts && props.posts.content}</p>
                  </div>
                  <span className="text-primary">
                    {props.posts && props.posts.category}
                  </span>
                  <div className="float-right mt-sm-0 mt-3">
                    <Link to="/app" className="btn">
                      Kembali <i className="fas fa-chevron-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    posts: state.posts[ownProps.match.params.id]
  };
};

export default connect(mapStateToProps, { fetchPost })(Detail);
