import "./App.css";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavigationBar from "./Components/NavBar/NavigationBar";

class App extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <React.Fragment>
            <div className="App">
              <NavigationBar />
            </div>
          </React.Fragment>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
