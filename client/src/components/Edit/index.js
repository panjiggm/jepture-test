import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPost, editPost } from "../../store/actions/postAction";

import EditPost from "./EditPost";
import Navbar from "../General/Navbar";
import Sidebar from "../General/Sidebar";
import Footer from "../General/Footer";

const Edit = props => {
  useEffect(() => {
    props.fetchPost(props.match.params.id);
  }, [props]);

  return (
    <div id="app">
      <div className="main-wrapper container">
        <Navbar />
        <Sidebar />
        <div className="main-content">
          <section className="section">
            <div className="section-header">
              <h1>Edit</h1>
              <div className="section-header-button">
                <a href="/app" className="btn btn-dark">
                  Kembali
                </a>
              </div>
            </div>
            <EditPost
              editPost={props.editPost}
              initialValues={props.posts}
              id={props.match.params.id}
            />
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

export default connect(mapStateToProps, { fetchPost, editPost })(Edit);
