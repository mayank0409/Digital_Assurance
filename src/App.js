import React, { Component } from "react";
import "./App.scss";

import Header from "./components/header";
import SideMenu from "./components/sidebar";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <SideMenu />
      </div>
    );
  }
}

export default App;
