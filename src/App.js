// import React, { Component } from "react";

// class App extends Component {
//   render() {
//     const dom = <h1>Hello World !!</h1>;
//     return <React.Fragment>
//       {dom}
//     </React.Fragment>;
//   }
// }

const App = () => {
  return <div>
    <Cat />
    <Cat />
    <Cat />
    <Cat />
  </div>;
}

const Cat = () => {
  return <p>みゃおん</p>
}

export default App;
