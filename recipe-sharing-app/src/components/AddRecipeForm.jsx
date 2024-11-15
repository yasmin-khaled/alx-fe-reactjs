 // AddRecipeForm component
 import { useState } from 'react';
 import useRecipeStore from '../store/recipeStore';

 const AddRecipeForm = () => {
   const addRecipe = useRecipeStore(state => state.addRecipe);
   const recipes = useRecipeStore((state) => state.recipes)

   const [title, setTitle] = useState('');
   const [description, setDescription] = useState('');

   const handleSubmit = (event) => {
     event.preventDefault();
     const newRecipe = { id: Date.now(), title, description };
     addRecipe(newRecipe);
     console.log("Full list of recipes:", recipes);
     setTitle('');
     setDescription('');
   };

   return (
     <form onSubmit={handleSubmit}>
       <input
         type="text"
         value={title}
         onChange={(e) => setTitle(e.target.value)}
         placeholder="Title"
       />
       <textarea
         value={description}
         onChange={(e) => setDescription(e.target.value)}
         placeholder="Description"
       />
       <button type="submit">Add Recipe</button>
     </form>
   );
 };

 export default AddRecipeForm;