import React from "react";
import _ from "lodash";
import PostForm from "../Form/PostForm";

const EditPost = ({ editPost, initialValues, id }) => {
  const onSubmit = formVal => {
    editPost(id, formVal);
  };
  return (
    <div className="section-body">
      <h2 className="section-title">Edit the Post</h2>
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
              <PostForm
                initialValues={_.pick(
                  initialValues,
                  "title",
                  "category",
                  "content",
                  "author",
                  "status"
                )}
                onSubmitPost={onSubmit}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditPost;
