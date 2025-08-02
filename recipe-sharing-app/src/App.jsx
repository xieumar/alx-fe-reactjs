import { BrowserRouter as Router  ,Routes, Route } from 'react-router-dom';
import './App.css';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import EditRecipeForm from './components/EditRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar';

function App() {
  return (
   
    <Router>
      <Routes>
        <Route path="/" element={
          <>
          
            <AddRecipeForm />
            <SearchBar />
            <RecipeList />
          </>
        } />
        <Route path="/:recipeId" element={<RecipeDetails />} />
      </Routes>
    </Router>
   
  );
}

export default App;
