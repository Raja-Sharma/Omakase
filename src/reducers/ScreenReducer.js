export default function(state={}, action) {
  switch (action.type) {
    case 'SCREEN_CHANGE':
      return Object.assign({}, state, {})
    default:
        return state
  }
}
