import {
  loginFailure,
  loginStart,
  loginSuccess,
  logoutSuccess,
} from "./userRedux";
import { publicRequest, userRequest } from "../requestMethods";
import {
  getHeaderFailure,
  getHeaderStart,
  getHeaderSuccess,
  deleteHeaderFailure,
  deleteHeaderStart,
  deleteHeaderSuccess,
  updateHeaderFailure,
  updateHeaderStart,
  updateHeaderSuccess,
  addHeaderFailure,
  addHeaderStart,
  addHeaderSuccess,
} from "./headerRedux";
import {
  getArticleFailure,
  getArticleStart,
  getArticleSuccess,
  deleteArticleFailure,
  deleteArticleStart,
  deleteArticleSuccess,
  updateArticleFailure,
  updateArticleStart,
  updateArticleSuccess,
  addArticleFailure,
  addArticleStart,
  addArticleSuccess,
} from "./articleRedux";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("api/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};
export const logout = (dispatch) => {
  dispatch(loginStart());
  try {
    dispatch(logoutSuccess());
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const getHeader = async (dispatch) => {
  dispatch(getHeaderStart());
  try {
    const res = await publicRequest.get("api/header/find");
    dispatch(getHeaderSuccess(res.data));
  } catch (err) {
    dispatch(getHeaderFailure());
  }
};

export const deleteHeader = async (id, dispatch) => {
  dispatch(deleteHeaderStart());
  try {
    const res = await userRequest.delete(`api/header/${id}`);
    dispatch(deleteHeaderSuccess(id));
  } catch (err) {
    dispatch(deleteHeaderFailure());
  }
};

export const updateHeader = async (id, header, dispatch) => {
  dispatch(updateHeaderStart());
  try {
    const res = await userRequest.put(`api/header/${id}`, header);
    dispatch(updateHeaderSuccess({ id, header }));
  } catch (err) {
    dispatch(updateHeaderFailure());
  }
};
export const addHeader = async (header, dispatch) => {
  dispatch(addHeaderStart());
  try {
    const res = await userRequest.post(`api/header`, header);
    dispatch(addHeaderSuccess(res.data));
  } catch (err) {
    dispatch(addHeaderFailure());
  }
};
export const getArticle = async (dispatch) => {
  dispatch(getArticleStart());
  try {
    const res = await publicRequest.get("api/article/find");
    dispatch(getArticleSuccess(res.data));
  } catch (err) {
    dispatch(getArticleFailure());
  }
};

export const deleteArticle = async (id, dispatch) => {
  dispatch(deleteArticleStart());
  try {
    const res = await userRequest.delete(`api/article/${id}`);
    dispatch(deleteArticleSuccess(id));
  } catch (err) {
    dispatch(deleteArticleFailure());
  }
};

export const updateArticle = async (id, article, dispatch) => {
  dispatch(updateArticleStart());
  try {
    const res = await userRequest.put(`api/article/${id}`, article);
    dispatch(updateArticleSuccess({ id, article }));
  } catch (err) {
    dispatch(updateArticleFailure());
  }
};
export const addArticle = async (article, dispatch) => {
  dispatch(addArticleStart());
  try {
    const res = await userRequest.post(`api/article`, article);
    dispatch(addArticleSuccess(res.data));
  } catch (err) {
    dispatch(addArticleFailure());
  }
};
