import { Component } from "react";

class MainContent extends Component {
  //propriedades:
  state = {
    pageTitle: "Customers",
    customerCount: 5,
    customers: [
      { id: 1, name: "Tico", phone: "123-456", adress: { city: "Braga" } },
      { id: 2, name: "André", phone: "123-456", adress: { city: "New York" } },
      { id: 3, name: "Alice", phone: "123-456", adress: { city: "Praga" } },
      { id: 4, name: "Tom", phone: null, adress: { city: "Lisbon" } },
      { id: 5, name: "Rosa", phone: "123-456", adress: { city: "Porto" } },
    ],
  };

  render() {
    return (
      <div>
        <h4 className="m-1 p-1">
          <p className="border-bottom m-1 p-1">{this.state.pageTitle}</p>
          <span className="border-bottom m-2">{this.state.customerCount}</span>
          <button className="btn btn-info" onClick={this.onRefreshClick}>
            Refresh
          </button>
        </h4>
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Custom Name</th>
              <th>Phone</th>
              <th>City</th>
            </tr>
          </thead>

          <tbody>{this.getCustomerRow()}</tbody>
        </table>
      </div>
    );
  }

  //executa quando o utilizador clicka no botão refresh
  onRefreshClick = () => {
    this.setState({
      customerCount: 7,
    });
  };

  getPhoneToRender = (phone) => {
    return phone ? phone : <div className="bg-warning p-2">No Phone</div>;
  };

  getCustomerRow = () => {
    return this.state.customers.map((cust) => {
      return (
        <tr key={cust.id}>
          <td>{cust.id}</td>
          <td>{cust.name}</td>
          <td>{this.getPhoneToRender(cust.phone)}</td>
          <td>{cust.adress.city}</td>
        </tr>
      );
    });
  };
}

export default MainContent;
