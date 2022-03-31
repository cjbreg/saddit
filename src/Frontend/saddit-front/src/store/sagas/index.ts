import { store } from "../index";
import { all, call, put, spawn } from "redux-saga/effects";
import { noop } from "lodash";
import { SAGA_ERROR, UNAUTHORISED_ERROR } from "../actions";
import SadditApiClient from "../../shared/saddit-api-client";
import authSaga from "./authSaga";

export default function* root() {
  const options = {
    baseURL: "", // TODO Added baseURl to .env
    timeout: 10000,
  };
  const apiClient = new SadditApiClient(options); // TODO setup client

  apiClient.add401ResponseInterceptor(() =>
    store.dispatch({ type: UNAUTHORISED_ERROR })
  );

  const sagas = [authSaga];

  yield all(
    sagas.map((saga) =>
      spawn(function* () {
        while (1) {
          try {
            yield call(saga, apiClient);
            break;
          } catch (e) {
            noop(e);
          }
        }
      })
    )
  );
}

export function* handleError(error: any, actionType: any) {
  if (!error?.response?.data) {
    yield put({ type: SAGA_ERROR });
    throw error;
  }
  yield put({ type: actionType, data: error.response.data });
  throw error;
}

export function* handleAuthorizeServiceError(
  errorMessage: string,
  actionType: any
) {
  yield put({ type: actionType, data: errorMessage });
}

export type Response = {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
};
