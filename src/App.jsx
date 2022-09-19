import { Component } from "react";
import CustomerList from "./CustomerList";
import NavBar from "./NavBar";
import ShoppingCart from "./ShoppingCart";

//App é a raiz, NavBar e CustomerList são child componentes
class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <ShoppingCart />
      </div>
    );
  }
}

export default App;
