import React, { Component } from "react";
import Product from "./Product";

export default class ShoppingCart extends Component {
  state = {
    products: [
      { id: 1, productName: "iPhone", price: 990, quantity: 0 },
      { id: 2, productName: "TV", price: 200, quantity: 0 },
      { id: 3, productName: "Radio", price: 60, quantity: 0 },
      { id: 4, productName: "Computer", price: 1000, quantity: 0 },
      { id: 5, productName: "Hat", price: 20, quantity: 0 },
    ],
  };

  render() {
    return (
      <div>
        <h4>Shopping Cart</h4>

        <div>
          {this.state.products.map((prod) => {
            return <Product />;
          })}
        </div>
      </div>
    );
  }
}
