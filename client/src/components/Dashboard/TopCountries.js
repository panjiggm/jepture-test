import React from "react";

import id from "../../assets/img/flags/4x3/id.svg";
import my from "../../assets/img/flags/4x3/my.svg";
import us from "../../assets/img/flags/4x3/us.svg";
import ps from "../../assets/img/flags/4x3/ps.svg";
import de from "../../assets/img/flags/4x3/de.svg";

const TopCountries = () => {
  return (
    <div className="col-md-6">
      <div className="card">
        <div className="card-header">
          <h4>Top Countries</h4>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-sm-6">
              <div className="text-title mb-2">July</div>
              <ul className="list-unstyled list-unstyled-border list-unstyled-noborder mb-0">
                <li className="media">
                  <img
                    className="img-fluid mt-1 img-shadow"
                    src={id}
                    alt="pict"
                    width="40"
                  />
                  <div className="media-body ml-3">
                    <div className="media-title">Indonesia</div>
                    <div className="text-small text-muted">
                      3,282 <i className="fas fa-caret-down text-danger"></i>
                    </div>
                  </div>
                </li>
                <li className="media">
                  <img
                    className="img-fluid mt-1 img-shadow"
                    src={my}
                    alt="pict"
                    width="40"
                  />
                  <div className="media-body ml-3">
                    <div className="media-title">Malaysia</div>
                    <div className="text-small text-muted">
                      2,976 <i className="fas fa-caret-down text-danger"></i>
                    </div>
                  </div>
                </li>
                <li className="media">
                  <img
                    className="img-fluid mt-1 img-shadow"
                    src={us}
                    alt="pict"
                    width="40"
                  />
                  <div className="media-body ml-3">
                    <div className="media-title">United States</div>
                    <div className="text-small text-muted">
                      1,576 <i className="fas fa-caret-up text-success"></i>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-sm-6 mt-sm-0 mt-4">
              <div className="text-title mb-2">August</div>
              <ul className="list-unstyled list-unstyled-border list-unstyled-noborder mb-0">
                <li className="media">
                  <img
                    className="img-fluid mt-1 img-shadow"
                    src={id}
                    alt="pict"
                    width="40"
                  />
                  <div className="media-body ml-3">
                    <div className="media-title">Indonesia</div>
                    <div className="text-small text-muted">
                      3,486 <i className="fas fa-caret-up text-success"></i>
                    </div>
                  </div>
                </li>
                <li className="media">
                  <img
                    className="img-fluid mt-1 img-shadow"
                    src={ps}
                    alt="pict"
                    width="40"
                  />
                  <div className="media-body ml-3">
                    <div className="media-title">Palestine</div>
                    <div className="text-small text-muted">
                      3,182 <i className="fas fa-caret-up text-success"></i>
                    </div>
                  </div>
                </li>
                <li className="media">
                  <img
                    className="img-fluid mt-1 img-shadow"
                    src={de}
                    alt="pict"
                    width="40"
                  />
                  <div className="media-body ml-3">
                    <div className="media-title">Germany</div>
                    <div className="text-small text-muted">
                      2,317 <i className="fas fa-caret-down text-danger"></i>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopCountries;
