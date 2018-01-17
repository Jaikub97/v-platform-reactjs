// actions
export const types  = {
  SHOWLOADING: 'common/SHOWLOADING',
  HIDELOADING: 'common/HIDELOADING'
}

// init
const initialState = {
  isLoading: false
}

// reducer
export default function reducer (state = initialState, actions = {}) {
  switch (actions.type) {
    case types.SHOWLOADING:
      return { ...state, isLoading: true }
    case types.HIDELOADING:
      return { ...state, isLoading: false }
    default: return state
  }
}

// action creators 
export const actions = {
  showLoading: () => ({type: types.SHOWLOADING}),
  hideLoading: () => ({type: types.HIDELOADING})
}
