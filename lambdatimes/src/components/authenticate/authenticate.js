import React from "react";

const authenticate = App =>
  class extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        authenticated: false
      };
    }

    componentDidMount() {
      this.updateAuth();
    }

    updateAuth = () => {
      const auth =
        localStorage.getItem("user") && localStorage.getItem("password");
      this.setState({
        authenticated: auth
      });
    };

    render() {
      return (
        <App
          authenticated={this.state.authenticated}
          updateAuth={this.updateAuth}
        />
      );
    }
  };

export default authenticate;
