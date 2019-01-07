export function manageFriends(state, action){
  let newState = {...state}

  switch (action.type) {
    case 'ADD_FRIEND':
      newState.friends.push(action.friend)
      break;
    case 'REMOVE_FRIEND':
      newState.friends.map((friend, index) => {
        console.log(friend, index);
        if (friend.id === action.id) {
          newState.friends.splice(1, index)
        }
      })
      break;
    default:

  }

  return newState
}
