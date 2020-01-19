import React, { Fragment } from "react";

const Social = () => {
  return (
    <Fragment>
      <div className="text-center mt-4 mb-3">
        <div className="text-job text-muted">Login With Social</div>
      </div>
      <div className="row sm-gutters">
        <div className="col-6">
          <button className="btn btn-block btn-social btn-facebook">
            <span className="fab fa-facebook"></span> Facebook
          </button>
        </div>
        <div className="col-6">
          <button className="btn btn-block btn-social btn-twitter">
            <span className="fab fa-twitter"></span> Twitter
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Social;
