import { Component } from "react";

export default class Login extends Component {
  // state={};//ou construtor
  constructor(props) {
    super(props);
    this.state = { email: "", password: "", message: "" };
  }

  render() {
    return (
      <div className="col-lg-9">
        <h4 className="m-1 p-2 border bottom">Login</h4>

        {/*Email começa*/}
        <div className="form-group form-row">
          <label className="col-lg-4">Email</label>
          <input
            type="text"
            className="form-control"
            value={this.state.email}
            onChange={(event) => {
              this.setState({ email: event.target.value });
            }}
          ></input>
        </div>
        {/*Email acaba*/}

        {/*Password começa*/}
        <div className="form-group form-row">
          <label className="col-lg-4">Password</label>
          <input
            type="password"
            className="form-control"
            value={this.state.password}
            onChange={(event) => {
              this.setState({ password: event.target.value });
            }}
          ></input>
        </div>
        {/*Password acaba*/}

        <div className="text-right">
          {this.state.message}
          <button className="btb btn-primary m-1" onClick={this.onLoginClick}>
            Login
          </button>
        </div>
      </div>
    );
  }

  //Executa quando o utilizador utiliza o botão login
  onLoginClick = () => {
    console.log(this.state);

    if (
      this.state.email === "admin@test.com" &&
      this.state.password === "admin123"
    ) {
      //sucesso
      this.setState({
        message: (
          <span className="text-success">Login efetuado com sucesso!</span>
        ),
      });
    } else {
      //sem sucesso
      this.setState({
        message: (
          <span className="text-danger">Login efetuado sem sucesso!</span>
        ),
      });
    }
  };
}
