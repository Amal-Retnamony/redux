const initialState = {
  count: 0,
  name: "",
  age:"",
  phone:""
};
const example = (state = initialState, action) => {
  switch (action.type) {
    case "BUTTON_CLICKED":
      return {
        ...state,
        count: state.count + 1,
        name: action.text.name1,
        age:action.text.age1,
        phone:action.text.phone1
      };
    case "Inputchange":
      return {
        ...state
      };
    default:
      return{
        ...state,
        count: state.count + 1,
        name: state.name + action.text
      }
  }
};
export default example;
