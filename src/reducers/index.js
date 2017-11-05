import { combineReducers } from 'redux';
import ScreenReducer from './ScreenReducer';
import IngredientsReducer from './IngredientsReducer';
import RecipesReducer from './RecipesReducer';

const rootReducer = combineReducers({
  screen: ScreenReducer,
  ingredients: IngredientsReducer,
  recipes: RecipesReducer
})

export default rootReducer;
