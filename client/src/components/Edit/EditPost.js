import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { createPost } from "../../store/actions/postAction";

const renderInput = ({ input, label }) => {
  return (
    <div className="form-group row mb-4">
      <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">
        {label}
      </label>
      <div className="col-sm-12 col-md-7">
        <input {...input} type="text" className="form-control" />
      </div>
    </div>
  );
};

const EditPost = ({ handleSubmit, createPost, reset }) => {
  const onSubmit = formVal => {
    createPost(formVal);
    reset();
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
              <form onSubmit={handleSubmit(onSubmit)}>
                <Field name="title" component={renderInput} label="Title" />

                <div className="form-group row mb-4">
                  <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">
                    Category
                  </label>
                  <div className="col-sm-12 col-md-7">
                    <Field
                      name="category"
                      component="select"
                      className="form-control selectric">
                      <option></option>
                      <option>Tech</option>
                      <option>News</option>
                      <option>Political</option>
                    </Field>
                  </div>
                </div>

                <div className="form-group row mb-4">
                  <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">
                    Content
                  </label>
                  <div className="col-sm-12 col-md-7">
                    <Field
                      name="content"
                      component="textarea"
                      label="Content"
                      className="form-control"
                      style={{ height: 200 }}
                    />
                  </div>
                </div>

                <Field name="author" component={renderInput} label="Author" />

                <div className="form-group row mb-4">
                  <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">
                    Status
                  </label>
                  <div className="col-sm-12 col-md-7">
                    <Field
                      name="status"
                      component="select"
                      className="form-control selectric">
                      <option></option>
                      <option>Publish</option>
                      <option>Draft</option>
                      <option>Pending</option>
                    </Field>
                  </div>
                </div>

                <div className="form-group row mb-4">
                  <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3"></label>
                  <div className="col-sm-12 col-md-7">
                    <button className="btn btn-primary">Create Post</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const formWrapped = reduxForm({
  form: "postCreate"
})(EditPost);

export default connect(null, { createPost })(formWrapped);
