import React, { Component } from "react";

class App extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    accept: false,
    message: "",

    errors: {
      username: false,
      email: false,
      password: false,
      accept: false,
    },
  };

  messages = {
    username_incorrect:
      "Nazwa musi być dłuższa niż 10 znaków i nie może zawierać spacji",
    email_incorrect: "Adres email musi zawierać znak @",
    password_incorrect: "Hasło musi mieć dokładnie 8 znaków",
    accept_incorrect: "Nie potwierdzono zgody",
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
    const validaton = this.formValidation();
    e.preventDefault();
    console.log("ok");
    if (validaton.correct) {
      this.setState({
        username: "",
        email: "",
        password: "",
        accept: false,
        message: "Formularz wysłany",
      });
    } else {
      this.setState({
        errors: {
          username: !validaton.username,
          email: !validaton.email,
          password: !validaton.password,
          accept: !validaton.accept,
        },
      });
    }
  };

  formValidation = () => {
    let username = false;
    let email = false;
    let password = false;
    let accept = false;
    let correct = false;
    if (
      this.state.username.length > 10 &&
      this.state.username.indexOf(" ") === -1
    ) {
      username = true;
    }
    if (this.state.email.indexOf("@") !== -1) {
      email = true;
    }
    if (this.state.password.length === 8) {
      password = true;
    }
    if (this.state.accept) {
      accept = true;
    }
    if (username && email && password && accept) {
      correct = true;
    }
    return {
      correct,
      username,
      email,
      password,
      accept,
    };
  };

  componentDidUpdate() {
    if (this.state.message !== "") {
      setTimeout(
        () =>
          this.setState({
            message: "",
          }),
        3000
      );
    }
  }

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
            <span>
              {this.state.errors.username && (
                <span>{this.messages.username_incorrect}</span>
              )}
            </span>
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
            >
              <span>
                {this.state.errors.email && (
                  <span>{this.messages.email_incorrect}</span>
                )}
              </span>
            </input>
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
            >
              {" "}
              <span>
                {this.state.errors.password && (
                  <span>{this.messages.password_incorrect}</span>
                )}
              </span>
            </input>
          </label>
          <label htmlFor="accept">
            <input
              type="checkobox"
              id="accept"
              name="accept"
              checked={this.state.accept}
              onChange={this.handleChange}
            ></input>
            wyrażam zgodę lorem ipsum
          </label>
          <span>
            {this.state.errors.accept && (
              <span>{this.messages.accept_incorrect}</span>
            )}
          </span>
          <button>wyślij formularz</button>
        </form>
        {this.state.message && <h3>{this.state.message}</h3>}
      </div>
    );
  }
}
export default App;
