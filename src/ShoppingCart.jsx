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

  //map dá acesso a cada produto
  render() {
    return (
      <div className="container-fluid">
        <h4>Shopping Cart</h4>

        <div className="row">
          {this.state.products.map((prod) => {
            return (
              <Product
                key={prod.id}
                product={prod}
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
                onDelete={this.handleDelete}
              >
                <button className="btn btn-primary">Buy Now</button>
              </Product>
            );
          })}
        </div>
      </div>
    );
  }

  //Executa quando o utilizador clicla no + button
  handleIncrement = (product, maxValue) => {
    //console.log("handleIncrement", product);
    //product.quantity = product.quantity+1;--> Só atualiza internamente (temos de utilziar o setState)

    //tem o index de cada produto
    let allProducts = [...this.state.products]; // ... copia todos os elementos do array para o novo
    let index = allProducts.indexOf(product);
    //Temos acesso ao objeto atraves do index: console.log(allProducts[index]);
    if (allProducts[index].quantity < maxValue) {
      allProducts[index].quantity++;

      this.setState({ products: allProducts });
    }
  };

  handleDecrement = (product, minValue) => {
    let allProducts = [...this.state.products]; // ... copia todos os elementos do array para o novo
    let index = allProducts.indexOf(product);
    //Temos acesso ao objeto atraves do index: console.log(allProducts[index]);
    if (allProducts[index].quantity > minValue) {
      allProducts[index].quantity--;
      this.setState({ products: allProducts });
    }
  };

  //executa qunado o utilizador click no x
  handleDelete = (product) => {
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);

    if (window.confirm("Are you sure to delete?")) {
      //apaga produto, baseado no index
      allProducts.splice(index, 1);

      //dá update ao componente atual(parent component)
      this.setState({ products: allProducts });
    }
  };
}
