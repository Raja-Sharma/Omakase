export default function(state={}, action) {
  switch (action.type) {
    case 'INGREDIENTS':
      return Object.assign({}, state, { ingredients: 'change in ingredientsReducer' })
    default:
      return state
  }
}
