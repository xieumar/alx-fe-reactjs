// SearchBar.jsx
import { useRecipeStore } from './RecipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);

  return (
   <div className="w-sm h-4/5 mx-auto my-2.5 flex flex-col ">
     <input
      type="text"
      placeholder="Search recipes..."
      className="w-3xs mb-4 mx-auto border rounded p-2 "
      onChange={(e) => setSearchTerm(e.target.value)}
    />
   </div>
  );
};

export default SearchBar;
