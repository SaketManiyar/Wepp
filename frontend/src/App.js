import "./App.css";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavigationBar from "./Components/NavBar/NavigationBar";
import Carousels from "./Components/Carousels";

class App extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <React.Fragment>
            <div className="App">
              <NavigationBar />
              {/* <Carousels /> */}
              <Switch>
                {/* <Route exact path="/addcredit" component={Credit} /> */}
              </Switch>
            </div>
          </React.Fragment>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
