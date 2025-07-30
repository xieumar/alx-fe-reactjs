 import { useRecipeStore } from './RecipeStore';
 import { Link } from 'react-router-dom'

  const RecipeList = () => {
    const recipes = useRecipeStore(state => state.recipes);
 
    return (
      <div className=' w-sm h-4/5 rounded mx-auto my-2.5 flex flex-col gap-2'>
         <h1 className='mx-auto text-2xl mb-2.5'>Recipe List</h1>
        {recipes.map(recipe => {
          const {id, title, description} = recipe;

          return(
            <div key={recipe.id}>
            <h3 className='mx-auto text-xl mb-1.5'>Title: {recipe.title}</h3>
            <p className='mx-auto text-base mb-1.5'>Description: {recipe.description}</p>
             <Link to={`/${id}`} className='mx-auto text-lg text-center underline text-blue-500 mx-auto hover:text-blue-600 active:text-blue-700'>Details</Link>
          </div>
          )
        }
          
        )}
      </div>
    );
  };

  export default RecipeList;