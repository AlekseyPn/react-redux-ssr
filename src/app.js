import React, { Component } from "react";

import { FirstCounter } from "./containers/first-counter";
import { SecondCounter } from "./containers/second-counter";

class App extends Component {
  render() {
    return [
      <FirstCounter key="counter_1" />,
      <SecondCounter key="counter_2" />,
    ];
  }
}
export default App;
