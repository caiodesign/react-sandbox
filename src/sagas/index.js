import { call, put, takeLatest, all } from 'redux-saga/effects'
import { actions, types } from '../actions/userData'
import UserProvider from '../api/user'

export const feedBackMessages = {
  fetchErrorMessage: {
    content: 'Failed to get user data.',
    type: 'error',
  },

  fetchSuccessMessage: {
    content: 'User data updated!',
    type: 'success',
  },
}

const { setUserData, setUserSuccess, setUserError } = actions

export function* getProfile() {
  try {
    yield put(setUserError(false))
    const response = yield call(UserProvider.getUserProfile)
    yield put(setUserData(response))
    yield put(setUserSuccess(true))
  } catch (error) {
    yield(put(setUserError(true)))
  }
}

export function* setUserError(error) {

}

export function* setUserSuccess(success) {

}

export default function* root() {
  yield all([
    takeLatest(types.UPDATE_LOAD, getProfile),
    takeLatest(userDataTypes.SAVE_PROFILE, saveProfile),
  ])
}
