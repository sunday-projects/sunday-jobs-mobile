import { createStore, combineReducers } from 'redux';

import { jobReducer, userReducer } from '@/reducers';

const reducers = combineReducers({
  job: jobReducer,
  user: userReducer
});

const store = createStore(reducers);

export default store;
