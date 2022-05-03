import { AnyAction } from "redux";
import {
  POST_ERROR,
  POST_ERROR_DISMISS,
  POST_FETCHED_ALL,
  POST_FETCH_ALL,
  POST_POSTED_NEW,
  POST_POST_NEW,
  SAGA_ERROR,
} from "../actions";
import { produce } from "immer";
import { Post } from "../../shared/saddit-api-client";

export interface PostState {
  loading: boolean;
  error: Error;
  posts: Post[];
}

type Error = {
  enabled: boolean;
};

const defaultState: PostState = {
  loading: false,
  error: {
    enabled: false,
  },
  posts: [],
};

const postReducer = (action: AnyAction, state = defaultState): PostState => {
  switch (action.type) {
    case POST_FETCH_ALL:
      return produce(state, (draftState) => {
        draftState.loading = true;
      });

    case POST_FETCHED_ALL:
      return produce(state, (draftState) => {
        draftState.loading = false;
        draftState.error = {
          enabled: false,
        };
        draftState.posts = action.data;
      });

    case POST_POST_NEW:
      return produce(state, (draftState) => {
        draftState.loading = true;
      });

    case POST_POSTED_NEW:
      return produce(state, (draftState) => {
        draftState.loading = false;
        draftState.error = {
          enabled: false,
        };
        // TODO: fix return value to add to posts list
      });

    case POST_ERROR:
      return produce(state, (draftState) => {
        draftState.error = {
          ...action.data,
        };
        draftState.error.enabled = true;
        draftState.loading = false;
      });

    case POST_ERROR_DISMISS:
      return produce(state, (draftState) => {
        draftState.error = {
          enabled: false,
        };
        draftState.loading = false;
      });

    case SAGA_ERROR:
      return produce(state, (draftState) => {
        draftState.loading = false;
      });

    default:
      return state;
  }
};

export default postReducer;
