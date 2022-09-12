import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./userRedux";
import headerReducer from "./headerRedux";
import articleReducer from "./articleRedux";
import mainReducer from "./mainRedux";
import statisticReducer from "./statisticRedux";
import planReducer from "./planRedux";
import buyFieldReducer from "./buyFieldRedux";
import metaBoxReducer from "./metaBoxRedux";
import nftReducer from "./NFTRedux";
import roadMapReducer from "./roadMapRedux";
import boxReducer from "./boxRedux";
import virtualBoxReducer from "./virtualBoxRedux";
import wiiReducer from "./wiiRedux";
import contractReducer from "./contractRedux";
import saleReducer from "./saleRedux";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const rootReducer = combineReducers({
  user: userReducer,
  header: headerReducer,
  article: articleReducer,
  main: mainReducer,
  statistic: statisticReducer,
  plan: planReducer,
  buyField: buyFieldReducer,
  metaBox: metaBoxReducer,
  nft: nftReducer,
  roadMap: roadMapReducer,
  box: boxReducer,
  virtualBox: virtualBoxReducer,
  wii: wiiReducer,
  contract: contractReducer,
  sale: saleReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);