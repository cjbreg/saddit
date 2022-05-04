export const SAGA_ERROR = "SAGA_ERROR";
export const UNAUTHORISED_ERROR = "UNAUTHORISED_ERROR";

/**
 * AUTHENTICATION CONSTANTS
 */

export const AUTH_SIGN_IN = "AUTH_SIGN_IN";
export const AUTH_SIGNED_IN = "AUTH_SIGNED_IN";
export const AUTH_REGISTER_USER = "AUTH_REGISTER_USER";
export const AUTH_USER_REGISTERED = "AUTH_USER_REGISTERED";
export const AUTH_SIGN_OUT = "AUTH_SIGN_OUT";
export const AUTH_SIGNED_OUT = "AUTH_SIGNED_OUT";

export const AUTH_RESET_FLOW = "AUTH_RESET_FLOW";
export const AUTH_ERROR = "AUTH_ERROR";
export const AUTH_ERROR_DISMISS = "AUTH_ERROR_DISMISS";

export const FIREBASE_FETCH_ACCESS_TOKEN = "FIREBASE_FETCH_ACCESS_TOKEN";
export const FIREBASE_FETCHED_ACCESS_TOKEN = "FIREBASE_FETCH_ACCESS_TOKEN";

/**
 * POST CONSTANTS
 */

export const POST_FETCH_ALL = "POST_FETCH_ALL";
export const POST_FETCHED_ALL = "POST_FETCHED_ALL";
export const POST_POST_NEW = "POST_POST_NEW";
export const POST_POSTED_NEW = "POST_POSTED_NEW";
export const POST_FETCH_SUB_POSTS = "POST_FETCH_SUB_POSTS";
export const POST_FETCHED_SUB_POSTS = "POST_FETCHED_SUB_POSTS";

export const POST_ERROR = "POST_ERROR";
export const POST_ERROR_DISMISS = "POST_ERROR_DISMISS";

function action(type: string, payload = {}) {
  return { type, ...payload };
}

/* 
    AUTHENTICATION ACTIONS 
*/
export const signIn = (payload: any) => action(AUTH_SIGN_IN, { payload });
export const registerUser = (payload: any) =>
  action(AUTH_REGISTER_USER, { payload });
export const dismissAuthError = () => action(AUTH_ERROR_DISMISS);
export const resetAuthFlow = () => action(AUTH_RESET_FLOW);
export const signOut = () => action(AUTH_SIGN_OUT);

export const fetchAccessToken = (payload: any) =>
  action(FIREBASE_FETCH_ACCESS_TOKEN, { payload });

/**
 * POST ACTIONS
 */

export const fetchPosts = () => action(POST_FETCH_ALL);
export const fetchSubSadditPosts = (payload: any) =>
  action(POST_FETCH_SUB_POSTS, { payload });
export const newPost = (payload: any) => action(POST_POST_NEW, { payload });
