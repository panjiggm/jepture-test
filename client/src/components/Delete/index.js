import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { deletePost, fetchPost } from "../../store/actions/postAction";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import Modal from "../Modal";
import history from "../../history";
import { Link, Redirect } from "react-router-dom";

const formSwal = withReactContent(Swal);

const Delete = props => {
  useEffect(() => {
    props.fetchPost(props.match.params.id);
  }, [props]);

  const onDelete = () => {
    const { id } = props.match.params;
    props.deletePost(id);

    formSwal
      .fire("Berhasil!", "Postingan telah Dihapus!", "success")
      .then(() => <Redirect to="/app" />);
  };

  const renderActions = () => {
    return (
      <Fragment>
        <Link
          type="button"
          className="btn btn-secondary"
          data-dismiss="modal"
          to="/app">
          Close
        </Link>
        <button type="button" className="btn btn-danger" onClick={onDelete}>
          Delete
        </button>
      </Fragment>
    );
  };

  const renderContent = () => {
    if (!props.posts) {
      return "Apa anda yakin akan menghapushnya?";
    }

    return `Apa anda yakin akan menghapush post ${props.posts.title}?`;
  };

  return (
    <Modal
      onDismiss={() => history.push("/app")}
      content={renderContent}
      actionButton={renderActions}
    />
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    posts: state.posts[ownProps.match.params.id]
  };
};

export default connect(mapStateToProps, { fetchPost, deletePost })(Delete);
