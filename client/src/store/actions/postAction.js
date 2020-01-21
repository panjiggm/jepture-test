import moment from "moment";
import endpoints from "../endpoints";
import history from "../../history";
import {
  CREATE_POST,
  FETCH_POSTS,
  FETCH_POST,
  DELETE_POST,
  EDIT_POST
} from "../types";

export const createPost = formValues => async dispatch => {
  const response = await endpoints.post("/posts", {
    ...formValues,
    created_at: moment(new Date()).format("h:mm, DD/MM/YY"),
    updated_at: ""
  });

  dispatch({ type: CREATE_POST, payload: response.data });
  history.push("/app");
};

export const fetchPosts = () => async dispatch => {
  const response = await endpoints.get("/posts");

  dispatch({ type: FETCH_POSTS, payload: response.data });
};

export const fetchPost = id => async dispatch => {
  const response = await endpoints.get(`/posts/${id}`);

  dispatch({ type: FETCH_POST, payload: response.data });
};

export const editPost = (id, formValues) => async dispatch => {
  const response = await endpoints.patch(`/posts/${id}`, {
    ...formValues,
    updated_at: moment(new Date()).format("h:mm, DD/MM/YY")
  });

  dispatch({ type: EDIT_POST, payload: response.data });
  history.push("/app");
};

export const deletePost = id => async dispatch => {
  await endpoints.delete(`/posts/${id}`);

  dispatch({ type: DELETE_POST, payload: id });
  history.push("/app");
};
