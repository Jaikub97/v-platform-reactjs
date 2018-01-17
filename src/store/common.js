import { Toast } from 'antd-mobile'

// actions
export const types  = {
  REQUEST_START: 'common/SHOWLOADING',
  REQUEST_SUCCESS: 'common/HIDELOADING',
  REQUEST_FAIL: 'common/SHOWERROR'
}

// init
const initialState = {
  isLoading: false,
  errInfo: {
    status: false,
    msg: ''
  }
}

// reducer
export default function reducer (state = initialState, action) {
  switch (action.type) {
    case types.REQUEST_START: // 开始请求
      return { ...state, isLoading: true }

    case types.REQUEST_SUCCESS: // 请求成功
      return { ...state, isLoading: false }

    case types.REQUEST_FAIL: // 请求失败，返回失败提示信息
      Toast.fail('加载数据错误...');
      return { ...state, isLoading: false, errInfo: action.errInfo }

    default: return state
  }
}

// action creators 
export const actions = {
  requestStart: () => ({type: types.REQUEST_START}),
  requestSuccess: () => ({type: types.REQUEST_SUCCESS}),
  requestFail: (err) => ({type: types.REQUEST_FAIL, errInfo: {status: true, msg: err}})
}
