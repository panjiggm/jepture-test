import React from "react";

const Modal = ({ onDismiss, content, actionButton }) => {
  return (
    <div className="container row" onClick={onDismiss}>
      <div className="col-md-5 offset-1"></div>
      <div className="col-md-2 col-lg-6" onClick={e => e.stopPropagation()}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Hapus Post</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={onDismiss}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p>{content()}</p>
            </div>
            <div className="modal-footer">{actionButton()}</div>
          </div>
        </div>
      </div>
      <div className="col-md-5"></div>
    </div>
  );
};

export default Modal;
