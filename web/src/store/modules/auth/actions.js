export function signInRequest(email, password) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { email, password },
  };
}

export function signInSuccess(token, collector) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { token, collector },
  };
}

export function signUpRequest(data) {
  return {
    type: '@auth/SIGN_UP_REQUEST',
    payload: { data },
  };
}

export function signUpSuccess() {
  return {
    type: '@auth/SIGN_UP_SUCCESS',
  };
}

export function signFailure() {
  return {
    type: '@auth/SIGN_FAILURE',
  };
}

export function signOut() {
  return {
    type: '@auth/SIGN_OUT',
  };
}
