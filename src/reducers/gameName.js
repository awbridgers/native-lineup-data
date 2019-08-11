export const gameName = (state = '', action) =>{
  switch(action.type){
    case 'SELECT_GAME':
      return action.gameName;
    default:
      return state;
  }
}
