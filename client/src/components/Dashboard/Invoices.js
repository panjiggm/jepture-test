import React from "react";
const Invoices = () => {
  return (
    <div className="col-md-8">
      <div className="card">
        <div className="card-header">
          <h4>Invoices</h4>
          <div className="card-header-action">
            <a href="/" className="btn btn-danger">
              View More <i className="fas fa-chevron-right"></i>
            </a>
          </div>
        </div>
        <div className="card-body p-0">
          <div className="table-responsive table-invoice">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Invoice ID</th>
                  <th>Customer</th>
                  <th>Status</th>
                  <th>Due Date</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <a href="/">INV-87239</a>
                  </td>
                  <td className="font-weight-600">Kusnadi</td>
                  <td>
                    <div className="badge badge-warning">Unpaid</div>
                  </td>
                  <td>July 19, 2018</td>
                  <td>
                    <a href="/" className="btn btn-primary">
                      Detail
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="/">INV-48574</a>
                  </td>
                  <td className="font-weight-600">Hasan Basri</td>
                  <td>
                    <div className="badge badge-success">Paid</div>
                  </td>
                  <td>July 21, 2018</td>
                  <td>
                    <a href="/" className="btn btn-primary">
                      Detail
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="/">INV-76824</a>
                  </td>
                  <td className="font-weight-600">Muhamad Nuruzzaki</td>
                  <td>
                    <div className="badge badge-warning">Unpaid</div>
                  </td>
                  <td>July 22, 2018</td>
                  <td>
                    <a href="/" className="btn btn-primary">
                      Detail
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="/">INV-84990</a>
                  </td>
                  <td className="font-weight-600">Agung Ardiansyah</td>
                  <td>
                    <div className="badge badge-warning">Unpaid</div>
                  </td>
                  <td>July 22, 2018</td>
                  <td>
                    <a href="/" className="btn btn-primary">
                      Detail
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="/">INV-87320</a>
                  </td>
                  <td className="font-weight-600">Ardian Rahardiansyah</td>
                  <td>
                    <div className="badge badge-success">Paid</div>
                  </td>
                  <td>July 28, 2018</td>
                  <td>
                    <a href="/" className="btn btn-primary">
                      Detail
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoices;
