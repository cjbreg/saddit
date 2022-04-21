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
  AUTH_SIGNED_OUT,
  AUTH_SIGN_IN,
  AUTH_SIGN_OUT,
  FIREBASE_FETCHED_ACCESS_TOKEN,
  FIREBASE_FETCH_ACCESS_TOKEN,
} from "../actions";
import { handleError } from "./";

let apiClient: SadditApiClient;

function* watchSignIn(action: any) {
  try {
    yield put({ type: AUTH_SIGNED_IN, data: action.payload.data });

    yield put({ type: AUTH_ERROR_DISMISS });
  } catch (error) {
    yield call(handleError, error, AUTH_ERROR);
  }
}

function* watchFetchAccessToken(action: any) {
  try {
    yield put({ type: FIREBASE_FETCHED_ACCESS_TOKEN, data: action.payload });

    yield put({ type: AUTH_ERROR_DISMISS });
  } catch (error) {
    yield call(handleError, error, AUTH_ERROR);
  }
}

function* watchSignOut() {
  try {
    yield put({ type: AUTH_SIGNED_OUT });
    yield put({ type: AUTH_ERROR_DISMISS });
  } catch (error) {
    yield put({ type: AUTH_SIGNED_OUT });
  }
}

export default function* authSaga(
  sadditApiClient: SadditApiClient
): Generator<AllEffect<ForkEffect<never>>, void, unknown> {
  apiClient = sadditApiClient;

  yield all([
    takeLatest(AUTH_SIGN_IN, watchSignIn),
    takeLatest(FIREBASE_FETCH_ACCESS_TOKEN, watchFetchAccessToken),
    takeLatest(AUTH_SIGN_OUT, watchSignOut),
  ]);
}
