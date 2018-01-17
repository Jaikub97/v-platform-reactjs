import { createStore, applyMiddleware, combineReducers} from 'redux'
// 异步thunk中间件
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
// reducer
import CommonReducer from './common'
import WelfareReducer  from './welfare'

// logger
const loggerMiddleware = createLogger()

// combineReducers
const rootReducer = combineReducers({
  Common: CommonReducer,
  Welfare: WelfareReducer
})

// middleware
const middleware = [ thunkMiddleware ]

let prod = process.env.NODE_ENV === 'production' ? true : false;
if (!prod) {
	// const Perf = require('react-addons-perf');
	// win.Perf = Perf;
  // middleware.push(require('redux-immutable-state-invariant').default());
  middleware.push(loggerMiddleware)
}




const createStoreWithMiddleware = applyMiddleware( ...middleware )(createStore)

export default function configureStore(initialState) {
  return createStoreWithMiddleware(rootReducer, initialState)
}