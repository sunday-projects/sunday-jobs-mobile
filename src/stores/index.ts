import { createStore, combineReducers } from 'redux';

import { jobReducer } from '@/reducers';

const reducers = combineReducers({
  job: jobReducer
});

const store = createStore(reducers);

export default store;
