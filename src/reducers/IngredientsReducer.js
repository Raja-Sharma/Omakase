export default function(state={}, action) {
  switch (action.type) {
    case 'INGREDIENTS':
      return Object.assign({}, state, { ingredients: action.payload })
    default:
      return state
  }
}
