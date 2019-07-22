const initialState = {
  loaded: false,
  error: false,
  success: false,
}

const reducer = (state = initialState, action) => {
  const newState = { ...state }
  switch (action.type) {
    case 'UPDATE_LOAD':
      return { ...state, loaded: action.loaded }
    case 'SET_LOAD_ERROR':
      return { ...state, error: action.error }
    case 'SET_LOAD_SUCCESS':
      return { ...state, success: action.success }
    default:
      return newState
  }
}

export default reducer
