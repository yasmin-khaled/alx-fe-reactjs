import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],  // Initial empty state
  addRecipe: (newRecipe) => set((state) => ({ recipes: [...state.recipes, newRecipe] })),
  deleteRecipe: (id) => set((state) => ({ recipes: state.recipes.filter(recipe => recipe.id !== id) })),
  updateRecipe: (updatedRecipe) => set((state) => ({
    recipes: state.recipes.map(recipe =>
      recipe.id === updatedRecipe.id ? { ...recipe, ...updatedRecipe } : recipe
    ),
  })),
  setRecipes: (recipes) => set({ recipes }),  // You can use this to initialize the state with pre-loaded recipes if needed
}));

export default useRecipeStore;