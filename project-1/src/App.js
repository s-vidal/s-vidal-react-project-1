import React, {Component} from "react";
import "./App.css";
import HomePage from "./components/homePage";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import NavBar from "./components/navBar";
import Profile from "./components/profile";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {userName: ""};
  }

  handleOnSubmit = (userName) => {
    this.setState({userName});
  };

  render() {
    const {userName} = this.state;
    return (
      <Router>
        <NavBar />
        <Switch>
          <Route path="/profile">
            <Profile onSubmit={this.handleOnSubmit} />
          </Route>
          <Route path="/">
            <div className="background-black min-height">
              <HomePage userName={userName} />
            </div>
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
