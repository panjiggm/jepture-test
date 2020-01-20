import React from "react";

const SectionHeader = () => {
  return (
    <div className="section-header">
      <h1>Posts</h1>
      <div className="section-header-button">
        <a href="/create" className="btn btn-primary">
          Add New
        </a>
      </div>
      <div className="section-header-breadcrumb">
        <div className="breadcrumb-item active">
          <a href="/dashboard">Dashboard</a>
        </div>
        <div className="breadcrumb-item">
          <a href="/app">Posts</a>
        </div>
        <div className="breadcrumb-item">All Posts</div>
      </div>
    </div>
  );
};

export default SectionHeader;
