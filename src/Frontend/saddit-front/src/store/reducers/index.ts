import { AnyAction, combineReducers, Reducer } from "redux";
import { AUTH_SIGNED_OUT, UNAUTHORISED_ERROR } from "../actions";
import authReducer, { AuthState } from "./authReducer";

export interface State {
  auth: AuthState;
}

const appReducer: Reducer<State> = combineReducers({
  auth: authReducer,
});

const rootReducer = (state: State | undefined, action: AnyAction): State => {
  if (action.type === AUTH_SIGNED_OUT) {
    state = undefined;
  }

  if (action.type === UNAUTHORISED_ERROR) {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
