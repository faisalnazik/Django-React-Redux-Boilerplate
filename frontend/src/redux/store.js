import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { loginReducer, registerReducer } from './reducers/authReducers';
import { usersReducer } from './reducers/usersReducers';

const reducer = combineReducers({
  userLogin: loginReducer,
  userRgister: registerReducer,

  listUser: usersReducer,
});

const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};
const middleware = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools({ mageAge: 200 })(applyMiddleware(...middleware)));

export default store;
