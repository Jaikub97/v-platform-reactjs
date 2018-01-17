/*
 * @Author: mr.mshao 
 * @Date: 2018-01-17 13:52:42 
 * @Last Modified by: mr.mshao
 * @Last Modified time: 2018-01-17 15:38:29
 */
import { actions as Common } from './common'
import fetch from '../utils/fetch'
//  action types 
export const types = {
  'MEIZITU': 'welfare/MEIZITU',
  'MEIZITU2': 'welfare/MEIZITU2',
}

// init
const initialState = {
  welfare: []
}

// reducer
export default function reducer (state = initialState, action) {
  switch (action.type) {
    case types.MEIZITU:
      return { ...state, welfare: state.welfare.concat(action.data) }
    case types.MEIZITU2:
    default: return state;
  }
}; 

// action creators
export const actions = {
  fetchWelfare: () => {
    return (dispatch) => {
      // 开启loading
      dispatch(Common.requestStart())
      fetch.get('/福利/10/2')
            .then(res => {
              dispatch({type: types.MEIZITU, data: res.data.results})
              // 关闭loading
              setTimeout(()=> dispatch(Common.requestSuccess()), 700)
            })
            .catch(err => {
              dispatch({type: types.MEIZITU2})
              // 关闭loading
              setTimeout(()=> dispatch(Common.requestFail(err)),500)
            })
    }
  }
}