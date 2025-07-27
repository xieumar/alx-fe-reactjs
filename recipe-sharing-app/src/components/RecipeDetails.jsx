 import useRecipeStore from './RecipeStore';
 import EditRecipeForm from './EditRecipeForm';
 import DeleteRecipeButton from './DeleteRecipeButton';

 
const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = useRecipeStore(state =>
    state.recipes.find(r => r.id === Number(id))
  );

  if (!recipe) {
    return <p>Recipe not found.</p>;
  }

  return (
    <div>
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>
      <EditRecipeForm
        recipe={recipe}
        onFinish={() => window.history.back()}/>
      <DeleteRecipeButton id={recipe.id} />
      <a href="/">← Back to list</a>
    </div>
  );
};

export default RecipeDetails;