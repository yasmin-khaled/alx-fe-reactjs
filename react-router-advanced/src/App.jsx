import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Profile from "./components/Profile";
import BlogPost from './components/BlogPost';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  localStorage.getItem("authenticated") === "true";
  const isAuthenticated = true;
  return (
    <Router>
      <Routes>
        <Route path="/">
        </Route>
        <Route path="/blog/:id" component={BlogPost} />
        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
