import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Profile from "./components/Profile";
import BlogPost from './components/BlogPost';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  localStorage.getItem("authenticated") === "true";
  return (
    <Router>
      <Switch>
        <Route path="/">
          <h2>Home</h2>
        </Route>
        <Route path="/post/:postId" component={BlogPost} />
        <ProtectedRoute path="/profile" component={Profile} />
      </Switch>
    </Router>
  );
}

export default App;
