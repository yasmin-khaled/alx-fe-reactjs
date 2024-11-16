import React from 'react';
import useRecipeStore from './recipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore(state => state.setSearchTerm);
  const filterRecipes = useRecipeStore(state => state.filterRecipes);
  const setRecipes = useRecipeStore(state => state.setRecipes);
  const filteredRecipes = useRecipeStore(state => state.filteredRecipes);
  const fullRecipesList = useRecipeStore(state => state.recipes);

  const handleSearchChange = (e) => {
    // if(!e.target.value){
    //     setSearchTerm('');
    //     filterRecipes();
    //     return;
    // }
    setSearchTerm(e.target.value);
    filterRecipes();
  };

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      onChange={handleSearchChange}
    />
  );
};

export default SearchBar;
