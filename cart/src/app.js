import React from "react";
import "./styles.css";
import {connect} from "react-redux";
import { addtocart, cartclick, backbutton, deletefromcart, deletecart } from "./actions";

const mapSateToProps = state =>({
  products : state.cartreducer.products,
  total : state.cartreducer.total,
  page : state.cartreducer.page,
  cart : state.cartreducer.cart
});
const mapDispatchToProps = dispatch =>({
  addToCart : val => dispatch(addtocart(val)),
  deleteFromCart : val => dispatch(deletefromcart(val)),
  cartClick : () => dispatch(cartclick()),
  backButton : () => dispatch(backbutton()),
  deleteCart: val => dispatch(deletecart(val))
})
class App extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    if(this.props.page === "home_page"){
    return(
      <div class="body">
      <body>
    <button id="count">{this.props.total}</button>
    <button id="cart" onClick={this.props.cartClick.bind(this)}>CART</button>
    <table>
    <tr>
     <th>ID</th>
     <th>NAME</th>
     <th>PRICE</th>
    </tr>
    {this.props.products.map(product => <tr>
      <td>{product.id}</td>
      <td>{product.name}</td>
      <td>{product.price}</td>
      <button id="add" onClick={this.props.addToCart.bind(this,product.id)}>add</button>
      </tr>)}
    </table>
    </body>
    </div>);
  }
  else{
    if(this.props.total>0){
  return(
    <div>
  <button id="back" onClick={this.props.backButton.bind(this)}>Back</button>
  <table>
  <tr>
   <th>ID</th>
   <th>NAME</th>
   <th>PRICE</th>
   <th>TOTAL</th>
   </tr>
  {this.props.cart.map(product => <tr>
    <td>{product.id}</td>
    <td>{product.name}</td>
    <td>{product.price}</td>
    <td>{product.count}</td>
    <button id="add" onClick={this.props.addToCart.bind(this,product.id)}>add</button>
    <button id="add" onClick={this.props.deleteFromCart.bind(this,product.id)}>delete</button>
    <button id="add" onClick={this.props.deleteCart.bind(this,product.id)}>cut</button>
    </tr>)}
  </table>
  </div>);
  }
  else{
    return(
      <div>
      <button id="back" onClick={this.props.backButton.bind(this)}>Back</button>
      <h1 align="center">NO ITEM ADDED</h1>
      <p align="center">go back<span id="blue" ><button id="blue" onClick={this.props.backButton.bind(this)}>Back</button></span>to add items</p>
    </div>);
  }
}
}
}


export default connect(mapSateToProps,mapDispatchToProps)(App);
