import {
  all,
  AllEffect,
  call,
  ForkEffect,
  takeLatest,
} from "redux-saga/effects";
import SadditApiClient from "../../shared/saddit-api-client";
import { POST_ERROR, POST_FETCH_ALL } from "../actions";
import { handleError, Response } from "./";

let apiClient: SadditApiClient;

function* watchFetchPosts() {
  try {
    const response: Response = yield call(apiClient.post.fetchPosts);

    console.log(response);
  } catch (error) {
    yield call(handleError, error, POST_ERROR);
  }
}

export default function* postSaga(
  sadditApiClient: SadditApiClient
): Generator<AllEffect<ForkEffect<never>>, void, unknown> {
  apiClient = sadditApiClient;

  yield all([takeLatest(POST_FETCH_ALL, watchFetchPosts)]);
}
