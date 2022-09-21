import React, { Component } from "react";
import Product from "./Product";

export default class ShoppingCart extends Component {
  //inicia quando um objeto desta classe é criado(qd a componente é mounted)
  constructor(props) {
    super(props); //chamamos a super class constructor (Component)--pode ter propriedade no super e construtor

    //inicialização do state
    this.state = {
      products: [],
    };
  }

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

  //execute depois do construtor e do render metodo(inclui o ciclo de vida da child components, se houver algum) do componente atual
  componentDidMount() {
    //fetch data from data source
    var promise = fetch("http://localhost5000/products", { method: "GET" });
    promise.then((response) => {
      console.log(response);

      var promise2 = response.json();
      promise2.then((prods) => {
        console.log(prods);

        this.setState({ products: prods });
      });
    });
  }

  componentDidUpdate(prevPros, prevState) {}

  //executa quando a instância atual do componente atual esta a ser apagada da memoria
  componentWillUnmount() {}

  componentDidCatch(error, info) {
    console.log(error, info);

    //erro na localStorage
    localStorage.latError = `${error}\n${JSON.stringify(info)}`;
  }
}
