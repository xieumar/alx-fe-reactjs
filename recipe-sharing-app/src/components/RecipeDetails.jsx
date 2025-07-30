// RecipeDetails.jsx
import { useParams } from 'react-router-dom';
import useRecipeStore from './RecipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';
import { useState } from 'react';

const RecipeDetails = () => {
  const { recipeId } = useParams(); // use "recipeId" to match the route param
 const recipe = useRecipeStore(state =>
  state.recipes.find(recipe => recipe.id === Number(recipeId))
);

  const [isEditing, setIsEditing] = useState(false);

  if (!recipe) return <p>Recipe not found</p>;

  return (
    <div className='w-sm h-4/5 mx-auto my-[5%] flex flex-col gap-2 text-center'>
      {isEditing ? (
        <EditRecipeForm recipe={recipe} onFinish={() => setIsEditing(false)} />
      ) : (
        <>
          <h1 className='mx-auto text-2xl mb-2.5'>Recipe Details</h1>
          <h1 className='mx-auto text-xl mb-1.5'>Title: {recipe.title}</h1>
          <p className='mx-auto text-base mb-1.5'>Description: {recipe.description}</p>
          <button onClick={() => setIsEditing(true)} className='w-[150px] h-10 bg-blue-500 mx-auto rounded-2xl hover:bg-blue-600 focus:outline-2 focus:outline-offset-2 focus:outline-blue-500 active:bg-blue-700'>Edit</button>
          <DeleteRecipeButton recipeId={recipe.id} />
        </>
      )}
    </div>
  );
};

export default RecipeDetails;
