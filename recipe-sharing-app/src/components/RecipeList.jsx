 // RecipeList component
 import useRecipeStore from '../store/recipeStore';
 import { Link } from 'react-router-dom';

 const RecipeList = () => {
   const recipes = useRecipeStore(state => state.recipes);

   return (
     <div>
       {recipes.map(recipe => (
            <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <Link to={`/recipe/${recipe.id}`}>Details</Link>  {/* Link to details page */}
          </div>
       ))}
     </div>
   );
 };

 export default RecipeList;