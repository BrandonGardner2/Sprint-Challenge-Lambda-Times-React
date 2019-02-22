import React from "react";
import styled from "styled-components";

const LoginFormContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: #00000069;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  background: #fafafa;
  padding: 20px;
  padding-bottom: 10px;
  border-radius: 10px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
`;

const LoginInput = styled.input`
  margin-bottom: 10px;
`;

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
    this.props.handleSubmit();
  };

  render() {
    return (
      <LoginFormContainer>
        <LoginForm onSubmit={this.submitForm}>
          <LoginInput
            name="user"
            placeholder="Username"
            value={this.state.user}
            onChange={this.handleChange}
          />
          <LoginInput
            name="password"
            placeholder="Password"
            type="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <button>Submit</button>
        </LoginForm>
      </LoginFormContainer>
    );
  }
}

export default Login;
