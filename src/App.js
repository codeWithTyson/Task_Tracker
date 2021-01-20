import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/layout/Footer";
import About from "./components/pages/About";
import { Home } from "./components/pages/Home";
import { GlobalContextProvider } from "./context/context-tasks";

const App = () => {
  return (
    <Router>
      <GlobalContextProvider>
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
          </Switch>
          <Footer />
        </div>
      </GlobalContextProvider>
    </Router>
  );
};

export default App;
