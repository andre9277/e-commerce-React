import { Component } from "react";
import MainContent from "./MainContent";
import NavBar from "./NavBar";

//App é a raiz, NavBar e MainContent são child componentes
class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <MainContent />
      </div>
    );
  }
}

export default App;
