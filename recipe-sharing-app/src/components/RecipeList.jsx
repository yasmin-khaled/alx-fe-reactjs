import React from 'react';
import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';

const RecipeList = () => {
  const completeRecipesList = useRecipeStore((state) => state.recipes);
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
  let recipes = filteredRecipes.length <= 0 ? completeRecipesList : filteredRecipes;

  if (recipes.length === 0) {
    return <p>No recipes found. Please add some recipes.</p>;  // Show a helpful message when no recipes are available
  }

  return (
    <div>
      <h2>Recipe List</h2>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
