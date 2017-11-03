export default function(state={}, action) {
  switch (action.type) {
    case 'SCREEN_CHANGE':
      Object.assign({}, state, {})
    default:
        return state
  }
}
