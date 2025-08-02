import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],

  // Add recipe
  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
      filteredRecipes: [...state.recipes, newRecipe], // keep in sync
    })),

  // Update recipe
  updateRecipe: (id, updatedRecipe) =>
    set((state) => {
      const updated = state.recipes.map((r) =>
        r.id === id ? { ...r, ...updatedRecipe } : r
      );
      return {
        recipes: updated,
        filteredRecipes: filterWithTerm(updated, state.searchTerm),
      };
    }),

  // Delete recipe
  deleteRecipe: (id) =>
    set((state) => {
      const updated = state.recipes.filter((r) => r.id !== id);
      return {
        recipes: updated,
        filteredRecipes: filterWithTerm(updated, state.searchTerm),
      };
    }),

  // Set search term and filter
  setSearchTerm: (term) =>
    set((state) => ({
      searchTerm: term,
      filteredRecipes: filterWithTerm(state.recipes, term),
    })),

  setRecipes: (recipes) =>
    set(() => ({
      recipes,
      filteredRecipes: recipes,
    })),
}));

// Helper function for filtering
function filterWithTerm(recipes, term) {
  const lowerTerm = term.toLowerCase();
  return recipes.filter((r) =>
    r.title.toLowerCase().includes(lowerTerm)
  );
}

export default useRecipeStore;
export { useRecipeStore };
