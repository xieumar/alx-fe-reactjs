import { BrowserRouter as Router  ,Routes, Route } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import EditRecipeForm from './components/EditRecipeForm';
import './App.css';
import RecipeDetails from './components/RecipeDetails';

function App() {
  return (
   
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <AddRecipeForm />
            <RecipeList />
          </>
        } />
        <Route path="/:recipeId" element={<RecipeDetails />} />
      </Routes>
    </Router>
   
  );
}

export default App;
