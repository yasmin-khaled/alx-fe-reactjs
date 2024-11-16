import React from 'react';
import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeList = () => {
  const completeRecipesList = useRecipeStore((state) => state.recipes);
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
  const favorites = useRecipeStore((state) => state.favorites);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);
  let buttonText = 'Add to Favorites';
  let recipes = filteredRecipes.length <= 0 ? completeRecipesList : filteredRecipes;

  if (recipes.length === 0) {
    return <p>No recipes found. Please add some recipes.</p>;  // Show a helpful message when no recipes are available
  }

  return (
    <div>
      <h2>Recipe List</h2>
      <ul>
        {recipes.map((recipe) => {
          const isFavorite = favorites.includes(recipe.id);

          return (
            <div key={recipe.id}>
              <h3>{recipe.title}</h3>
              <p>{recipe.description}</p>
              <Link to={`/recipe/${recipe.id}`}>Details</Link>
              <EditRecipeForm recipe={recipe} />
              <DeleteRecipeButton recipeId={recipe.id} />
              <button
                onClick={() => {
                  if (!isFavorite) {
                    addFavorite(recipe.id);
                  } else {
                    removeFavorite(recipe.id);
                  }
                }}
              >
                {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default RecipeList;
