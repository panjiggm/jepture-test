import React from "react";
import { connect } from "react-redux";
import { createPost } from "../../store/actions/postAction";

import PostForm from "../Form/PostForm";

const CreatePost = ({ createPost }) => {
  const onSubmit = formVal => {
    createPost(formVal);
  };
  return (
    <div className="section-body">
      <h2 className="section-title">Create New Post</h2>
      <p className="section-lead">
        On this page you can create a new post and fill in all fields.
      </p>

      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h4>Write Your Post</h4>
            </div>
            <div className="card-body">
              <PostForm onSubmitPost={onSubmit} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(null, { createPost })(CreatePost);
