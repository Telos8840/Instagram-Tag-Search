import {combineReducers} from 'redux';
import feed from './InstagramReducer';

const rootReducer = combineReducers({
  feed
});

export default rootReducer;
