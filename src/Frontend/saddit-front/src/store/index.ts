import { applyMiddleware, createStore } from "redux";
import { persistStore, persistReducer, PersistConfig } from "redux-persist";
import storage from "redux-persist/lib/storage";
import createSagaMiddleware, { SagaMiddlewareOptions } from "redux-saga";
import { SAGA_ERROR } from "./actions";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";
import rootSaga from "./sagas";

const persistConfig: PersistConfig<any> = {
  key: "root",
  version: 2,
  storage,
};

const middlewareConfig: SagaMiddlewareOptions = {
  onError: (err, errInfo) => {
    store.dispatch({ type: SAGA_ERROR, payload: { err, errInfo } });
    console.log("Error: ", err, errInfo);
  },
};

const sagaMiddleware = createSagaMiddleware(middlewareConfig);
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
