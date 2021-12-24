import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const initialState = {};

const persistConfig = {
  key: "markoni",
  storage,
  whitelist: ["MenuCategory"],
};

const middleware = [thunk];

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

const persistor = persistStore(store);

export { persistor, store };
