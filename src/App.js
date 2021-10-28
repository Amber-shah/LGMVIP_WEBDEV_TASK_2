import Users from "./grid";
import "./App.css";
import React, { Component } from "react";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { users_data: [], loading: false };
    this.updateState = this.updateState.bind(this);
  }
  updateState() {
    this.setState({ loading: true });

    setTimeout(
      async function () {
        const response = await fetch("https://reqres.in/api/users?page=1");
        const jsonresponse = await response.json();
        console.log(jsonresponse);
        this.setState({ users_data: jsonresponse["data"], loading: false });
      }.bind(this),
      2000
    );
  }
  render() {
    return (
      <>
        <nav className="navbar">
          <div className="navitems">
          <img src="https://www.pngitem.com/pimgs/m/650-6503651_navbar-logo-hd-png-download.png" alt = "Please Wait While loading" className="Loader"/>
            <h2 className="h2-left"> GridView </h2>
            <button className="fetchbtn" onClick={this.updateState}>
              GetUsers
            </button>
          </div>
        </nav>
        <div className="userdatacontainer">
          <Users loading={this.state.loading} users={this.state.users_data} />
        </div>
      </>
    );
  }
}
export default App;