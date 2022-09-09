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