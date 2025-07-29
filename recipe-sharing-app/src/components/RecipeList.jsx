 import { useRecipeStore } from './RecipeStore';
 import { Link } from 'react-router-dom'

  const RecipeList = () => {
    const recipes = useRecipeStore(state => state.recipes);
 
    return (
      <div>
        {recipes.map(recipe => {
          const {id, title, description} = recipe;

          return(
            <div key={recipe.id}className=' w-sm h-4/5 rounded mx-auto my-2.5 flex flex-col gap-2'>
            <h3 className='mx-auto text-xl mb-1.5'>Title: {recipe.title}</h3>
            <p className='mx-auto text-base mb-1.5'>Description: {recipe.description}</p>
             <Link to={`/${id}`}>Details</Link>
          </div>
          )
        }
          
        )}
      </div>
    );
  };

  export default RecipeList;