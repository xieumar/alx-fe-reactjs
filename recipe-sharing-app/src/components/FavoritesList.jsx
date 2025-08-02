// FavoritesList.jsx
import { useRecipeStore } from './RecipeStore';

const FavoritesList = () => {
  const favorites = useRecipeStore(state => state.favorites);
  const recipes = useRecipeStore(state => state.recipes);

  // Get recipe objects from favorite IDs
  const favoriteRecipes = favorites
    .map(id => recipes.find(recipe => recipe.id === id))
    .filter(Boolean); // Remove nulls in case a recipe no longer exists

  return (
    <div className='w-sm h-4/5 mx-auto my-[5%] flex flex-col gap-2 text-center'>
      <h2 className='mx-auto text-xl mb-1.5'>My Favorites</h2>
      {favoriteRecipes.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        favoriteRecipes.map((recipe) => (
          <div key={recipe.id} className="border p-2 my-2 rounded">
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default FavoritesList;
