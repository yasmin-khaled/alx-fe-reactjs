import React from 'react';
import useRecipeStore from './recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';
import { useParams, Link } from 'react-router-dom';

const RecipeDetails = () => {
 const { id: recipeId } = useParams();
  
  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id === recipeId)
  );
  // const favorites = useRecipeStore((state) => state.favorites);
  // const addFavorite = useRecipeStore((state) => state.addFavorite);
  // const removeFavorite = useRecipeStore((state) => state.removeFavorite);
  // const isFavorite = favorites.includes(recipeId);
  if (!recipe) {
    return <p>Recipe not found.</p>;
  }

  return (
    <div>
      {/* <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      <button onClick={() => (isFavorite ? removeFavorite(recipeId) : addFavorite(recipeId))}>
        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button> */}
    </div>
  );
};

export default RecipeDetails;
