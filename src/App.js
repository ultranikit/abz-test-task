import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import "./App.scss";
import { Homepage, ToolBar, Footer, EmptyPage } from "./components";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <ToolBar />

          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route component={EmptyPage} />
          </Switch>

          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
