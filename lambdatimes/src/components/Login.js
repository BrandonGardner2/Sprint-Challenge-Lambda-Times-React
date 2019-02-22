import React from "react";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: "",
      password: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitForm = e => {
    e.preventDefault();
    localStorage.setItem("user", this.state.user);
    localStorage.setItem("password", this.state.password);
    this.props.updateAuth();
  };

  render() {
    return (
      <form onSubmit={this.submitForm}>
        <input
          name="user"
          placeholder="Username"
          value={this.state.user}
          onChange={this.handleChange}
        />
        <input
          name="password"
          placeholder="Password"
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
        />
        <button>Submit</button>
      </form>
    );
  }
}

export default Login;
