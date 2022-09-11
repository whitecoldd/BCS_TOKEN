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
import {
  getMainFailure,
  getMainStart,
  getMainSuccess,
  deleteMainFailure,
  deleteMainStart,
  deleteMainSuccess,
  updateMainFailure,
  updateMainStart,
  updateMainSuccess,
  addMainFailure,
  addMainStart,
  addMainSuccess,
} from "./mainRedux";
import {
  getStatisticFailure,
  getStatisticStart,
  getStatisticSuccess,
  deleteStatisticFailure,
  deleteStatisticStart,
  deleteStatisticSuccess,
  updateStatisticFailure,
  updateStatisticStart,
  updateStatisticSuccess,
  addStatisticFailure,
  addStatisticStart,
  addStatisticSuccess,
} from "./statisticRedux";
import {
  getPlanFailure,
  getPlanStart,
  getPlanSuccess,
  deletePlanFailure,
  deletePlanStart,
  deletePlanSuccess,
  updatePlanFailure,
  updatePlanStart,
  updatePlanSuccess,
  addPlanFailure,
  addPlanStart,
  addPlanSuccess,
} from "./planRedux";
import {
  getBuyFieldFailure,
  getBuyFieldStart,
  getBuyFieldSuccess,
  deleteBuyFieldFailure,
  deleteBuyFieldStart,
  deleteBuyFieldSuccess,
  updateBuyFieldFailure,
  updateBuyFieldStart,
  updateBuyFieldSuccess,
  addBuyFieldFailure,
  addBuyFieldStart,
  addBuyFieldSuccess,
} from "./buyFieldRedux";
import {
  getMetaBoxFailure,
  getMetaBoxStart,
  getMetaBoxSuccess,
  deleteMetaBoxFailure,
  deleteMetaBoxStart,
  deleteMetaBoxSuccess,
  updateMetaBoxFailure,
  updateMetaBoxStart,
  updateMetaBoxSuccess,
  addMetaBoxFailure,
  addMetaBoxStart,
  addMetaBoxSuccess,
} from "./metaBoxRedux";
import {
  getNFTFailure,
  getNFTStart,
  getNFTSuccess,
  deleteNFTFailure,
  deleteNFTStart,
  deleteNFTSuccess,
  updateNFTFailure,
  updateNFTStart,
  updateNFTSuccess,
  addNFTFailure,
  addNFTStart,
  addNFTSuccess,
} from "./NFTRedux";
import {
  getRoadMapFailure,
  getRoadMapStart,
  getRoadMapSuccess,
  deleteRoadMapFailure,
  deleteRoadMapStart,
  deleteRoadMapSuccess,
  updateRoadMapFailure,
  updateRoadMapStart,
  updateRoadMapSuccess,
  addRoadMapFailure,
  addRoadMapStart,
  addRoadMapSuccess,
} from "./roadMapRedux";
import {
  getBoxFailure,
  getBoxStart,
  getBoxSuccess,
  deleteBoxFailure,
  deleteBoxStart,
  deleteBoxSuccess,
  updateBoxFailure,
  updateBoxStart,
  updateBoxSuccess,
  addBoxFailure,
  addBoxStart,
  addBoxSuccess,
} from "./boxRedux";
import {
  getVirtualBoxFailure,
  getVirtualBoxStart,
  getVirtualBoxSuccess,
  deleteVirtualBoxFailure,
  deleteVirtualBoxStart,
  deleteVirtualBoxSuccess,
  updateVirtualBoxFailure,
  updateVirtualBoxStart,
  updateVirtualBoxSuccess,
  addVirtualBoxFailure,
  addVirtualBoxStart,
  addVirtualBoxSuccess,
} from "./virtualBoxRedux";
import {
  getWiiFailure,
  getWiiStart,
  getWiiSuccess,
  deleteWiiFailure,
  deleteWiiStart,
  deleteWiiSuccess,
  updateWiiFailure,
  updateWiiStart,
  updateWiiSuccess,
  addWiiFailure,
  addWiiStart,
  addWiiSuccess,
} from "./wiiRedux";

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
export const getMain = async (dispatch) => {
  dispatch(getMainStart());
  try {
    const res = await publicRequest.get("api/main/find");
    dispatch(getMainSuccess(res.data));
  } catch (err) {
    dispatch(getMainFailure());
  }
};

export const deleteMain = async (id, dispatch) => {
  dispatch(deleteMainStart());
  try {
    const res = await userRequest.delete(`api/main/${id}`);
    dispatch(deleteMainSuccess(id));
  } catch (err) {
    dispatch(deleteMainFailure());
  }
};

export const updateMain = async (id, main, dispatch) => {
  dispatch(updateMainStart());
  try {
    const res = await userRequest.put(`api/main/${id}`, main);
    dispatch(updateMainSuccess({ id, main }));
  } catch (err) {
    dispatch(updateMainFailure());
  }
};
export const addMain = async (main, dispatch) => {
  dispatch(addMainStart());
  try {
    const res = await userRequest.post(`api/main`, main);
    dispatch(addMainSuccess(res.data));
  } catch (err) {
    dispatch(addMainFailure());
  }
};
export const getStatistic = async (dispatch) => {
  dispatch(getStatisticStart());
  try {
    const res = await publicRequest.get("api/statistics/find");
    dispatch(getStatisticSuccess(res.data));
  } catch (err) {
    dispatch(getStatisticFailure());
  }
};

export const deleteStatistic = async (id, dispatch) => {
  dispatch(deleteStatisticStart());
  try {
    const res = await userRequest.delete(`api/statistics/${id}`);
    dispatch(deleteStatisticSuccess(id));
  } catch (err) {
    dispatch(deleteStatisticFailure());
  }
};

export const updateStatistic = async (id, statistic, dispatch) => {
  dispatch(updateStatisticStart());
  try {
    const res = await userRequest.put(`api/statistics/${id}`, statistic);
    dispatch(updateStatisticSuccess({ id, statistic }));
  } catch (err) {
    dispatch(updateStatisticFailure());
  }
};
export const addStatistic = async (statistic, dispatch) => {
  dispatch(addStatisticStart());
  try {
    const res = await userRequest.post(`api/statistics`, statistic);
    dispatch(addStatisticSuccess(res.data));
  } catch (err) {
    dispatch(addStatisticFailure());
  }
};
export const getPlan = async (dispatch) => {
  dispatch(getPlanStart());
  try {
    const res = await publicRequest.get("api/plan/find");
    dispatch(getPlanSuccess(res.data));
  } catch (err) {
    dispatch(getPlanFailure());
  }
};

export const deletePlan = async (id, dispatch) => {
  dispatch(deletePlanStart());
  try {
    const res = await userRequest.delete(`api/plan/${id}`);
    dispatch(deletePlanSuccess(id));
  } catch (err) {
    dispatch(deletePlanFailure());
  }
};

export const updatePlan = async (id, plan, dispatch) => {
  dispatch(updatePlanStart());
  try {
    const res = await userRequest.put(`api/plan/${id}`, plan);
    dispatch(updatePlanSuccess({ id, plan }));
  } catch (err) {
    dispatch(updatePlanFailure());
  }
};
export const addPlan = async (plan, dispatch) => {
  dispatch(addPlanStart());
  try {
    const res = await userRequest.post(`api/plan`, plan);
    dispatch(addPlanSuccess(res.data));
  } catch (err) {
    dispatch(addPlanFailure());
  }
};
export const getBuyField = async (dispatch) => {
  dispatch(getBuyFieldStart());
  try {
    const res = await publicRequest.get("api/buyField/find");
    dispatch(getBuyFieldSuccess(res.data));
  } catch (err) {
    dispatch(getBuyFieldFailure());
  }
};

export const deleteBuyField = async (id, dispatch) => {
  dispatch(deleteBuyFieldStart());
  try {
    const res = await userRequest.delete(`api/buyField/${id}`);
    dispatch(deleteBuyFieldSuccess(id));
  } catch (err) {
    dispatch(deleteBuyFieldFailure());
  }
};

export const updateBuyField = async (id, buyField, dispatch) => {
  dispatch(updateBuyFieldStart());
  try {
    const res = await userRequest.put(`api/buyField/${id}`, buyField);
    dispatch(updateBuyFieldSuccess({ id, buyField }));
  } catch (err) {
    dispatch(updateBuyFieldFailure());
  }
};
export const addBuyField = async (buyField, dispatch) => {
  dispatch(addBuyFieldStart());
  try {
    const res = await userRequest.post(`api/buyField`, buyField);
    dispatch(addBuyFieldSuccess(res.data));
  } catch (err) {
    dispatch(addBuyFieldFailure());
  }
};
export const getMetaBox = async (dispatch) => {
  dispatch(getMetaBoxStart());
  try {
    const res = await publicRequest.get("api/metaBox/find");
    dispatch(getMetaBoxSuccess(res.data));
  } catch (err) {
    dispatch(getMetaBoxFailure());
  }
};

export const deleteMetaBox = async (id, dispatch) => {
  dispatch(deleteMetaBoxStart());
  try {
    const res = await userRequest.delete(`api/metaBox/${id}`);
    dispatch(deleteMetaBoxSuccess(id));
  } catch (err) {
    dispatch(deleteMetaBoxFailure());
  }
};

export const updateMetaBox = async (id, metaBox, dispatch) => {
  dispatch(updateMetaBoxStart());
  try {
    const res = await userRequest.put(`api/metaBox/${id}`, metaBox);
    dispatch(updateMetaBoxSuccess({ id, metaBox }));
  } catch (err) {
    dispatch(updateMetaBoxFailure());
  }
};
export const addMetaBox = async (metaBox, dispatch) => {
  dispatch(addMetaBoxStart());
  try {
    const res = await userRequest.post(`api/metaBox`, metaBox);
    dispatch(addMetaBoxSuccess(res.data));
  } catch (err) {
    dispatch(addMetaBoxFailure());
  }
};
export const getNFT = async (dispatch) => {
  dispatch(getNFTStart());
  try {
    const res = await publicRequest.get("api/nft/find");
    dispatch(getNFTSuccess(res.data));
  } catch (err) {
    dispatch(getNFTFailure());
  }
};

export const deleteNFT = async (id, dispatch) => {
  dispatch(deleteNFTStart());
  try {
    const res = await userRequest.delete(`api/nft/${id}`);
    dispatch(deleteNFTSuccess(id));
  } catch (err) {
    dispatch(deleteNFTFailure());
  }
};

export const updateNFT = async (id, nft, dispatch) => {
  dispatch(updateNFTStart());
  try {
    const res = await userRequest.put(`api/nft/${id}`, nft);
    dispatch(updateNFTSuccess({ id, nft }));
  } catch (err) {
    dispatch(updateNFTFailure());
  }
};
export const addNFT = async (nft, dispatch) => {
  dispatch(addNFTStart());
  try {
    const res = await userRequest.post(`api/nft`, nft);
    dispatch(addNFTSuccess(res.data));
  } catch (err) {
    dispatch(addNFTFailure());
  }
};
export const getRoadMap = async (dispatch) => {
  dispatch(getRoadMapStart());
  try {
    const res = await publicRequest.get("api/roadMap/find");
    dispatch(getRoadMapSuccess(res.data));
  } catch (err) {
    dispatch(getRoadMapFailure());
  }
};

export const deleteRoadMap = async (id, dispatch) => {
  dispatch(deleteRoadMapStart());
  try {
    const res = await userRequest.delete(`api/roadMap/${id}`);
    dispatch(deleteRoadMapSuccess(id));
  } catch (err) {
    dispatch(deleteRoadMapFailure());
  }
};

export const updateRoadMap = async (id, roadMap, dispatch) => {
  dispatch(updateRoadMapStart());
  try {
    const res = await userRequest.put(`api/roadMap/${id}`, roadMap);
    dispatch(updateRoadMapSuccess({ id, roadMap }));
  } catch (err) {
    dispatch(updateRoadMapFailure());
  }
};
export const addRoadMap = async (roadMap, dispatch) => {
  dispatch(addRoadMapStart());
  try {
    const res = await userRequest.post(`api/roadMap`, roadMap);
    dispatch(addRoadMapSuccess(res.data));
  } catch (err) {
    dispatch(addRoadMapFailure());
  }
};
export const getBox = async (dispatch) => {
  dispatch(getBoxStart());
  try {
    const res = await publicRequest.get("api/box/find");
    dispatch(getBoxSuccess(res.data));
  } catch (err) {
    dispatch(getBoxFailure());
  }
};

export const deleteBox = async (id, dispatch) => {
  dispatch(deleteBoxStart());
  try {
    const res = await userRequest.delete(`api/box/${id}`);
    dispatch(deleteBoxSuccess(id));
  } catch (err) {
    dispatch(deleteBoxFailure());
  }
};

export const updateBox = async (id, box, dispatch) => {
  dispatch(updateBoxStart());
  try {
    const res = await userRequest.put(`api/box/${id}`, box);
    dispatch(updateBoxSuccess({ id, box }));
  } catch (err) {
    dispatch(updateBoxFailure());
  }
};
export const addBox = async (box, dispatch) => {
  dispatch(addBoxStart());
  try {
    const res = await userRequest.post(`api/box`, box);
    dispatch(addBoxSuccess(res.data));
  } catch (err) {
    dispatch(addBoxFailure());
  }
};
export const getVirtualBox = async (dispatch) => {
  dispatch(getVirtualBoxStart());
  try {
    const res = await publicRequest.get("api/virtualBox/find");
    dispatch(getVirtualBoxSuccess(res.data));
  } catch (err) {
    dispatch(getVirtualBoxFailure());
  }
};

export const deleteVirtualBox = async (id, dispatch) => {
  dispatch(deleteVirtualBoxStart());
  try {
    const res = await userRequest.delete(`api/virtualBox/${id}`);
    dispatch(deleteVirtualBoxSuccess(id));
  } catch (err) {
    dispatch(deleteVirtualBoxFailure());
  }
};

export const updateVirtualBox = async (id, virtualBox, dispatch) => {
  dispatch(updateVirtualBoxStart());
  try {
    const res = await userRequest.put(`api/virtualBox/${id}`, virtualBox);
    dispatch(updateVirtualBoxSuccess({ id, virtualBox }));
  } catch (err) {
    dispatch(updateVirtualBoxFailure());
  }
};
export const addVirtualBox = async (virtualBox, dispatch) => {
  dispatch(addVirtualBoxStart());
  try {
    const res = await userRequest.post(`api/virtualBox`, virtualBox);
    dispatch(addVirtualBoxSuccess(res.data));
  } catch (err) {
    dispatch(addVirtualBoxFailure());
  }
};
export const getWii = async (dispatch) => {
  dispatch(getWiiStart());
  try {
    const res = await publicRequest.get("api/wii/find");
    dispatch(getWiiSuccess(res.data));
  } catch (err) {
    dispatch(getWiiFailure());
  }
};

export const deleteWii = async (id, dispatch) => {
  dispatch(deleteWiiStart());
  try {
    const res = await userRequest.delete(`api/wii/${id}`);
    dispatch(deleteWiiSuccess(id));
  } catch (err) {
    dispatch(deleteWiiFailure());
  }
};

export const updateWii = async (id, wii, dispatch) => {
  dispatch(updateWiiStart());
  try {
    const res = await userRequest.put(`api/wii/${id}`, wii);
    dispatch(updateWiiSuccess({ id, wii }));
  } catch (err) {
    dispatch(updateWiiFailure());
  }
};
export const addWii = async (wii, dispatch) => {
  dispatch(addWiiStart());
  try {
    const res = await userRequest.post(`api/wii`, wii);
    dispatch(addWiiSuccess(res.data));
  } catch (err) {
    dispatch(addWiiFailure());
  }
};
