
const initialState = {
  products : [
    {id:1,name:"pen",price:5,count:0},
    {id:2,name:"pencil",price:4,count:0}
  ],
  total : 0,
  cart : [],
  page : "home_page"
}

const cartreducer = (state=initialState,action) => {
    const  val = action.text-1;
    //const  products  = state.products;
    console.log(state.products);
    console.log("action.text ="+action.text+"kkk"+val+"eee");
    //console.log("vvv"+state.products[val].count);
    switch(action.type){
      case "add": {
        const products = [...state.products];
        const cart = [...state.cart];
        const [selectedItem] = products.filter(({ id }) => action.text === id);
        const index = products.indexOf(selectedItem);
        products.splice(index,1,selectedItem);
        selectedItem.count++;
        if(selectedItem.count===1){
        return {
          ...state,
          total : state.total+1,
          products : [...products],
          cart : [...cart,selectedItem]
        }
      }
      else{
        return {
          ...state,
          total : state.total+1,
          products : [...products]
        }
      }
      };

      case "deleteitem": {
        const products = [...state.products];
        const cart = [...state.cart];
        const [selectedItem] = products.filter(({ id }) => action.text === id);
        const index = products.indexOf(selectedItem);
        products.splice(index,1,selectedItem);
        if(selectedItem.count>0){
        selectedItem.count--;
        }
        if(selectedItem.count>0){
        return {
          ...state,
          total : state.total-1,
          products : [...products],
          cart : [...cart]
        }
       }
       else{
         const [selectedItem1] = cart.filter(({ id }) => action.text === id);
         const index1 = cart.indexOf(selectedItem1);
         cart.splice(index1,1);
        return {
         ...state,
         total : state.total-1,
         products : [...products],
         cart : [...cart]
       }
      }
      }
      case "cut": {
        const products = [...state.products];
        const [selectedItem] = products.filter(({ id }) => action.text === id);
        const cart = [...state.cart];
        const [selectedItem1] = cart.filter(({ id }) => action.text === id);
        const index1 = cart.indexOf(selectedItem1);
        cart.splice(index1,1);
        const index = products.indexOf(selectedItem);
        products.splice(index,1,selectedItem);
        const previouscount = selectedItem.count;
        selectedItem.count =0;
        return {
          ...state,
          total : state.total-previouscount,
          products : [...products],
          cart:[...cart]
        }
      }

      case "cart":
           return{
             ...state,
             page : action.text
           };

      case "back":
         return{
              ...state,
              page : action.text
            };
      default:
            return state;
   };
}

export default cartreducer;
