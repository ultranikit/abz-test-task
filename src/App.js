import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import "./App.scss";
import { Homepage } from "./components";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" component={Homepage} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
