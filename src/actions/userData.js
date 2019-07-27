export const types = {
  GET_USER_DATA: 'GET_USER_DATA',
  SET_USER_ERROR: 'SET_USER_ERROR',
  SET_USER_SUCCESS: 'SET_USER_SUCCESS',
}

export const actions = {
  setUserData: data => ({ type: types.GET_USER_DATA, data }),
  setUserError: error => ({ type: types.SET_USER_ERROR, error }),
  setUserSuccess: success => ({ type: types.SET_USER_SUCCESS, success })
}
