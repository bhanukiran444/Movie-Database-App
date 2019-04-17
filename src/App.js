import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Movie from "./components/main/movie/Movie";
import NotFound from "./components/NotFound";

class App extends Component {
  render() {
    console.log("env", process.env.REACT_APP_TMDB_API_KEY);
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/movies/:movieId" component={Movie} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
