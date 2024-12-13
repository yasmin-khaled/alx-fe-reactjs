import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import project from "./components/projects";

  function App() {
    return (
      <Router>
        <Routes>
          <Route path="/project" element={<project />} />
        </Routes>
      </Router>
    );
  }

export default App;
