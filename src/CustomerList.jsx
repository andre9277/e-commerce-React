import { Component } from "react";

class CustomerList extends Component {
  //propriedades:
  state = {
    pageTitle: "Customers",
    customerCount: 5,
    customers: [
      {
        id: 1,
        photo: "https://picsum.photos/id/1010/60",
        name: "Tico",
        phone: "123-456",
        adress: { city: "Braga" },
      },
      {
        id: 2,
        photo: "https://picsum.photos/id/1011/60",
        name: "André",
        phone: "123-456",
        adress: { city: "New York" },
      },
      {
        id: 3,
        photo: "https://picsum.photos/id/1012/60",
        name: "Alice",
        phone: "123-456",
        adress: { city: "Praga" },
      },
      {
        id: 4,
        photo: "https://picsum.photos/id/1013/60",
        name: "Tom",
        phone: null,
        adress: { city: "Lisbon" },
      },
      {
        id: 5,
        photo: "https://picsum.photos/id/1014/60",
        name: "Rosa",
        phone: "123-456",
        adress: { city: "Porto" },
      },
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
              <th>Photo</th>
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

  //index do correspondente elemento ( customer 1 terá o index 0,etc)
  getCustomerRow = () => {
    return this.state.customers.map((cust, index) => {
      return (
        <tr key={cust.id}>
          <td>{cust.id}</td>
          <td>
            <img src={cust.photo} alt="Customer" />
            <div>
              <button
                className="btn btn-sm btn-secondary"
                onClick={() => {
                  this.onChangePictureClick(cust, index);
                }}
              >
                Change Picture{" "}
              </button>
            </div>
          </td>
          <td>{cust.name}</td>
          <td>{this.getPhoneToRender(cust.phone)}</td>
          <td>{cust.adress.city}</td>
        </tr>
      );
    });
  };

  //Executa quando o utilizador clicka no botão: "change picture"
  //Recebe o "customer" objeto e index do cliente atual
  onChangePictureClick = (cust, index) => {
    //console.log(cust);
    //console.log(index);

    //vai buscar os clientes atuais
    var custArr = this.state.customers;
    custArr[index].photo = "https://picsum.photos/id/1019/60";

    //dá update ao componente( ex: se for  customers:[], vai apagar tudo! )
    this.setState({ customers: custArr });
  };
}

export default CustomerList;
