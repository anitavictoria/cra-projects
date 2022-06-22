import React, { Component } from "react";

class App extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    accept: false,
  };
  handleChange = (e) => {
    const name = e.target.name;
    const type = e.target.type;

    if (type === "text" || type === "password" || type === "email") {
      const value = e.target.value;
      this.setState({
        [name]: value,
      });
    } else if (type === "checkbox") {
      const checked = e.target.checked;
      this.setState({
        [name]: checked,
      });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("ok");
  };

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit} noValidate>
          <label htmlFor="user">
            {" "}
            Twoje imie:
            <input
              type="text"
              id="user"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            ></input>
          </label>

          <label htmlFor="email">
            {" "}
            Twoj adres email:
            <input
              type="email"
              id="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            ></input>
          </label>

          <label htmlFor="password">
            {" "}
            Hasło
            <input
              type="password"
              id="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            ></input>
          </label>
          <label htmlFor="accept">
            <input
              type="checkobox"
              id="accept"
              name="accept"
              checked={this.state.accept}
              onChange={this.handleChange}
            >
              wyrażam zgodę lorem ipsum
            </input>
          </label>
          <button>wyślij formularz</button>
        </form>
      </div>
    );
  }
}
export default App;
