 import { useRecipeStore } from './RecipeStore';

  const RecipeList = () => {
    const recipes = useRecipeStore(state => state.recipes);

    return (
      <div>
        {recipes.map(recipe => (
          <div key={recipe.id}className=' w-sm h-4/5 rounded mx-auto my-2.5 flex flex-col gap-2'>
            <h3 className='mx-auto text-xl mb-1.5'>Title: {recipe.title}</h3>
            <p className='mx-auto text-base mb-1.5'>Description: {recipe.description}</p>
          </div>
        ))}
      </div>
    );
  };

  export default RecipeList;