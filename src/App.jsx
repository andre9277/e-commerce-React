import { Component } from "react";
import MainContent from "./MainContent";
import NavBar from "./NavBar";

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
