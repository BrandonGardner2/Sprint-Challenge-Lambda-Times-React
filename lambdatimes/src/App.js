import React from "react";
import TopBar from "./components/TopBar";
import Header from "./components/Header";
import authenticate from "./components/authenticate/authenticate";
import Content from "./components/Content/Content";
import Login from "./components/Login";

const App = props => {
  return (
    <div className="App">
      <TopBar />
      <Header />
      {props.authenticated ? (
        <Content />
      ) : (
        <Login updateAuth={props.updateAuth} />
      )}
    </div>
  );
};

export default authenticate(App);
