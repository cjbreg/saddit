import {
  all,
  AllEffect,
  call,
  ForkEffect,
  put,
  takeLatest,
} from "redux-saga/effects";
import SadditApiClient from "../../shared/saddit-api-client";
import {
  AUTH_ERROR,
  AUTH_ERROR_DISMISS,
  AUTH_SIGNED_IN,
  AUTH_SIGN_IN,
} from "../actions";
import { handleError, Response } from "./";

let apiClient: SadditApiClient;

function* watchSignIn(action: any) {
  try {
    // const response: Response = yield call(
    //   apiClient.auth.userSignIn,
    //   action.payload.email,
    //   action.payload.password
    // );
    // yield put({ type: AUTH_SIGNED_IN, data: response.data });
    yield put({ type: AUTH_ERROR_DISMISS });
  } catch (error) {
    yield call(handleError, error, AUTH_ERROR);
  }
}

export default function* authSaga(
  sadditApiClient: SadditApiClient
): Generator<AllEffect<ForkEffect<never>>, void, unknown> {
  apiClient = sadditApiClient;

  yield all([takeLatest(AUTH_SIGN_IN, watchSignIn)]);
}
