const initialState = {
  count: 0,
  name: ""
};
const example = (state = initialState, action) => {
  console.log("sss"+action.text);
  switch (action.type) {
    case 'BUTTON_CLICKED':
      return {
        ...state,
        count: state.count + 1,
        name: action.text
      };
    case 'Inputchange':
      console.log(action.text);
      return {
        ...state,

  };
    default:
return state;
  }
}
export default example;
