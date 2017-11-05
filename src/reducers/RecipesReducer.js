export default function(state={}, action) {
  switch (action.type) {
    case 'RECIPES':
      return Object.assign({}, state, { recipes: action.payload })
    case 'NO_RECIPES':
      return Object.assign({}, state, { recipes: 'none' })
    default:
      return state
  }
}
