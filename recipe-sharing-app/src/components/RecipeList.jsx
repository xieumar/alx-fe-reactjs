import { useState } from 'react';
import useRecipeStore from './RecipeStore';
import EditRecipeForm from './EditRecipeForm';

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.recipes);
  const [editingId, setEditingId] = useState(null);

  return (
    <div>
      {recipes.map(recipe => (
        <div key={recipe.id} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
          {editingId === recipe.id ? (
            <EditRecipeForm
              recipe={recipe}
              onFinish={() => setEditingId(null)}
            />
          ) : (
            <>
              <h3>{recipe.title}</h3>
              <p>{recipe.description}</p>
              <button onClick={() => setEditingId(recipe.id)}>Edit</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
