import { combineReducers } from 'redux';
import ScreenReducer from './ScreenReducer';
import IngredientsReducer from './IngredientsReducer';

const rootReducer = combineReducers({
  screen: ScreenReducer,
  ingredients: IngredientsReducer
})

export default rootReducer;
