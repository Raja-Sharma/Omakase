import { combineReducers } from 'redux';
import ScreenReducer from './ScreenReducer';

export default combineReducers({
  screen: ScreenReducer
});
