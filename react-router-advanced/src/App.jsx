import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Profile from "./components/Profile";
import BlogPost from './components/BlogPost';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  localStorage.getItem("authenticated") === "true";
  return (
    <Router>
      <Routes>
        <Route path="/">
          <h2>Home</h2>
        </Route>
        <Route path="/blog/:id" component={BlogPost} />
        <ProtectedRoute path="/profile" component={Profile} />
      </Routes>
    </Router>
  );
}

export default App;
