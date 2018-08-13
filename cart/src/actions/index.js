const add = "add";
const cart = "cart";
const back = "back";
const deleteitem = "deleteitem";
const cut = "cut";

export const addtocart = (value) => ({
  type : add,
  text : value
});

export const deletefromcart = (value) => ({
  type : deleteitem,
  text : value
});


export const deletecart = (value) => ({
  type : cut,
  text : value
});


export const cartclick = () => ({
  type : cart,
  text : "cart_page"
});

export const backbutton = () => ({
  type : back,
  text : "home_page"
});
