import { useState } from 'react';
import useRecipeStore from './RecipeStore';

const EditRecipeForm = ({ recipe, onFinish }) => {
  const { recipes, setRecipes } = useRecipeStore(state => ({
    recipes: state.recipes,
    setRecipes: state.setRecipes
  }));

  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedRecipes = recipes.map(r =>
      r.id === recipe.id ? { ...r, title, description } : r
    );

    setRecipes(updatedRecipes);
    onFinish(); // signal to exit editing mode
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Edit Recipe</h3>
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
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditRecipeForm;
