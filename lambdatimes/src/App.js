import React from "react";
import TopBar from "./components/TopBar";
import Header from "./components/Header";
import authenticate from "./components/authenticate/authenticate";
import Content from "./components/Content/Content";

const App = props => {
  return (
    <div className="App">
      <TopBar updateAuth={props.updateAuth} />
      <Header />
      {props.authenticated ? (
        <Content />
      ) : (
        <React.Fragment>
          <p>This content is protected. Please login.</p>
        </React.Fragment>
      )}
    </div>
  );
};

export default authenticate(App);
