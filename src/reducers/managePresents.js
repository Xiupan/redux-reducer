export function managePresents(state, action){
  let newState = {...state}

  switch (action.type) {
    case 'INCREASE':
      newState.numberOfPresents += 1
      break;
    default:

  }

  return newState
}
