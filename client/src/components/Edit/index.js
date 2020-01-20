import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPost } from "../../store/actions/postAction";

import EditPost from "./EditPost";
import Navbar from "../General/Navbar";
import Sidebar from "../General/Sidebar";
import Footer from "../General/Footer";

const Edit = props => {
  useEffect(() => {
    props.fetchPost(props.match.params.id);
  }, []);

  console.log(props.posts && props.posts.title);

  return (
    <div id="app">
      <div className="main-wrapper container">
        <Navbar />
        <Sidebar />
        <div className="main-content">
          <section className="section">
            <EditPost />
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

export default connect(mapStateToProps, { fetchPost })(Edit);
