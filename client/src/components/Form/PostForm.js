import React from "react";
import { Field, reduxForm } from "redux-form";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const formSwal = withReactContent(Swal);

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

const PostForm = ({ handleSubmit, reset, onSubmitPost }) => {
  const onSubmit = formVal => {
    onSubmitPost(formVal);
    reset();

    formSwal
      .fire("Berhasil!", "Anda sudah posting!", "success")
      .then(() => (window.location.href = "/app"));
  };
  return (
    <div className="section-body">
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
            <button className="btn btn-primary">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default reduxForm({
  form: "postForm"
})(PostForm);
