import React from 'react';
import useRecipeStore from './recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const RecipeDetails = ({ recipeId }) => {
  
  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id ===recipeId)
  );

  if (!recipe) {
    return <p>Recipe not found.</p>;
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      <EditRecipeForm recipe={recipe} />
      <DeleteRecipeButton recipeId={recipe.id} />
      <Link to="/">Back to List</Link>
    </div>
  );
};

export default RecipeDetails;
