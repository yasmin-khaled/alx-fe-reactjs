import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import { BrowserRouter as Router, Routes, Route , useParams } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <h1>Recipe Manager</h1>
        <AddRecipeForm />
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/recipe/:id" element={<RecipeDetailsWrapper />} />
        </Routes>
      </div>
    </Router>
  );
}

function RecipeDetailsWrapper() {
  const { id } = useParams(); 
  return <RecipeDetails recipeId={id} />; 
}
export default App
