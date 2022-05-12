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
  POST_ERROR,
  POST_ERROR_DISMISS,
  POST_FETCHED_ALL,
  POST_FETCHED_SUB_POSTS,
  POST_FETCH_ALL,
  POST_FETCH_SUB_POSTS,
  POST_POSTED_NEW,
  POST_POST_NEW,
} from "../actions";
import { handleError, Response } from "./";

let apiClient: SadditApiClient;

function* watchFetchPosts() {
  try {
    const response: Response = yield call(apiClient.post.fetchPosts);

    yield put({ type: POST_FETCHED_ALL, data: response.data });

    yield put({ type: POST_ERROR_DISMISS });
  } catch (error) {
    yield call(handleError, error, POST_ERROR);
  }
}

function* wathcFethSubSadditPosts(action: any) {
  try {
    const response: Response = yield call(
      apiClient.post.fetchSubSadditPosts,
      action.payload
    );

    yield put({ type: POST_FETCHED_SUB_POSTS, data: response.data });

    yield put({ type: POST_ERROR_DISMISS });
  } catch (error) {
    yield call(handleError, error, POST_ERROR);
  }
}

function* watchSubmitNewPost(action: any) {
  try {
    const response: Response = yield call(
      apiClient.post.submitPost,
      action.payload.username,
      action.payload.userId,
      action.payload.content,
      action.payload.subSadditName
    );

    console.log(response);

    yield put({ type: POST_POSTED_NEW, data: response.data });

    yield put({ type: POST_ERROR_DISMISS });
  } catch (error) {
    yield call(handleError, error, POST_ERROR);
  }
}

export default function* postSaga(
  sadditApiClient: SadditApiClient
): Generator<AllEffect<ForkEffect<never>>, void, unknown> {
  apiClient = sadditApiClient;

  yield all([
    takeLatest(POST_FETCH_ALL, watchFetchPosts),
    takeLatest(POST_FETCH_SUB_POSTS, wathcFethSubSadditPosts),
    takeLatest(POST_POST_NEW, watchSubmitNewPost),
  ]);
}
