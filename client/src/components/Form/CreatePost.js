import React from "react";
import { Field, reduxForm } from "redux-form";

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

const renderTextarea = ({ textarea, label }) => {
  return (
    <div className="form-group row mb-4">
      <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">
        {label}
      </label>
      <div className="col-sm-12 col-md-7">
        <textarea
          name="content"
          {...textarea}
          className="form-control"
          style={{ height: 200 }}
        />
      </div>
    </div>
  );
};

const renderCategory = ({ select, label }) => {
  return (
    <div className="form-group row mb-4">
      <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">
        {label}
      </label>
      <div className="col-sm-12 col-md-7">
        <select name="category" {...select} className="form-control selectric">
          <option>Tech</option>
          <option>News</option>
          <option>Political</option>
        </select>
      </div>
    </div>
  );
};

const renderStatus = ({ select, label }) => {
  return (
    <div className="form-group row mb-4">
      <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">
        {label}
      </label>
      <div className="col-sm-12 col-md-7">
        <select name="status" {...select} className="form-control selectric">
          <option>Publish</option>
          <option>Draft</option>
          <option>Pending</option>
        </select>
      </div>
    </div>
  );
};

const onSubmit = formVal => {
  console.log(formVal);
};

const CreatePost = ({ handleSubmit }) => {
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
              <form onSubmit={handleSubmit(onSubmit)}>
                <Field name="title" component={renderInput} label="Title" />

                <Field
                  name="category"
                  component={renderCategory}
                  label="Category"
                  className="form-control selectric">
                  <option>Tech</option>
                  <option>News</option>
                  <option>Political</option>
                </Field>

                <Field
                  name="content"
                  component={renderTextarea}
                  label="Content"
                  className="form-control"
                  style={{ height: 200 }}
                />

                <Field name="author" component={renderInput} label="Author" />

                <Field
                  name="status"
                  component={renderStatus}
                  label="Status"
                  className="form-control selectric">
                  <option>Publish</option>
                  <option>Draft</option>
                  <option>Pending</option>
                </Field>

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

export default reduxForm({
  form: "postCreate"
})(CreatePost);
