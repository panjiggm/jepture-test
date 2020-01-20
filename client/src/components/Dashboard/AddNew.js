import React from "react";

const AddNew = () => {
  return (
    <div className="section-header">
      <h1>Posts</h1>
      <div className="section-header-button">
        <a href="/app" className="btn btn-primary">
          Create Post
        </a>
      </div>
      <div className="section-header-breadcrumb">
        <div className="breadcrumb-item active">
          <a href="/dashboard">Dashboard</a>
        </div>
      </div>
    </div>
  );
};

export default AddNew;
