import { AnyAction } from "redux";
import {
  AUTH_ERROR,
  AUTH_ERROR_DISMISS,
  AUTH_SIGNED_IN,
  AUTH_SIGN_IN,
  FIREBASE_FETCHED_ACCESS_TOKEN,
  SAGA_ERROR,
} from "../actions";
import { produce } from "immer";
import { AuthStates } from "../../models/AuthStates";

export interface AuthState {
  loading: boolean;
  error: Error;
  authState: AuthStates;
  token: string | null;
  userId: number | null;
  user: any;
  username: string | null;
}

type Error = {
  enabled: boolean;
};

const defaultState: AuthState = {
  loading: false,
  error: {
    enabled: false,
  },
  authState: AuthStates.LANDING,
  token: null,
  userId: null,
  user: null,
  username: null,
};

const authReducer = (state = defaultState, action: AnyAction): AuthState => {
  switch (action.type) {
    case AUTH_SIGN_IN:
      return produce(state, (draftState) => {
        draftState.loading = true;
      });

    case AUTH_SIGNED_IN:
      return produce(state, (draftState) => {
        draftState.user = action.data.user;
        draftState.loading = false;
        draftState.authState = AuthStates.SIGNED_IN;
        draftState.userId = action.data.user.uid;
        console.log(action);
        console.log(action.dbData);

        draftState.username = action.dbData.username;
      });

    case FIREBASE_FETCHED_ACCESS_TOKEN:
      return produce(state, (draftState) => {
        draftState.token = action.data;
      });

    case AUTH_ERROR:
      return produce(state, (draftState) => {
        draftState.error = {
          ...action.data,
        };
        draftState.error.enabled = true;
        draftState.loading = false;
      });

    case AUTH_ERROR_DISMISS:
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

export default authReducer;
