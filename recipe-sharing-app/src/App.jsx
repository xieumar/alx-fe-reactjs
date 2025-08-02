import { BrowserRouter as Router  ,Routes, Route } from 'react-router-dom';
import './App.css';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';

function App() {
  return (
   
    <Router>
      <Routes>
        <Route path="/" element={
          <>
          
            <AddRecipeForm />
            <SearchBar />
            <RecipeList />
            <FavoritesList />
            <RecommendationsList />
          </>
        } />
        <Route path="/:recipeId" element={<RecipeDetails />} />
      </Routes>
    </Router>
   
  );
}

export default App;
