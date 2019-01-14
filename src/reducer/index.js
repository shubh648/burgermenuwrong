
const initialState={
    menuClicked : false,
  }
  
  const reducer=(state=initialState, action)=>{
    switch (action.type){
      case "MENU_CLICKED":
        return Object.assign({}, state, {menuClicked:!state.menuClicked})
      default:
        return state
    }
  }
  
  export default reducer;