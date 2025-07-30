import { useState } from 'react';
import { useRecipeStore } from './RecipeStore';

  const AddRecipeForm = () => {
    const addRecipe = useRecipeStore(state => state.addRecipe);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (event) => {
      event.preventDefault();
      addRecipe({ id: Date.now(), title, description });
      setTitle('');
      setDescription('');
    };

    return (
      <form onSubmit={handleSubmit} className=' w-sm h-4/5 mx-auto my-[5%] flex flex-col gap-2'>
        <h1 className='mx-auto text-2xl mb-2.5'>Recipe Sharing App</h1>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="w-[70%] p-2 rounded border-0 mx-auto mb-2"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          className="w-[70%] p-2 rounded border-0 mx-auto mb-2"
        />
        <button type="submit" className='w-[150px] h-10 bg-blue-500 mx-auto rounded-2xl hover:bg-blue-600 focus:outline-2 focus:outline-offset-2 focus:outline-blue-500 active:bg-blue-700'>Add Recipe</button>
      </form>
    );
  };

  export default AddRecipeForm;