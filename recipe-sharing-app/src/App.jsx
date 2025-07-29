import './App.css'
import RecipeList from './components/RecipeList'
import AddRecipeForm from './components/AddRecipeForm'
import useRecipeStore from './components/RecipeStore';
import RecipeDetails from './components/RecipeDetails';
import { Routes, Route } from "react-router";


function App() {
  const recipes = useRecipeStore(state => state.recipes);

  return (
    <Routes>
      <Route path='/' element={
        <>
          <AddRecipeForm />
          <RecipeList />
        </>}/>
      
      {recipes.map(recipe => {
          const recipeId = recipe.id;
          return (
            <Route
              path={`/${recipeId}`}
              element={<RecipeDetails recipeId={recipeId} />}
              key={recipeId}
            />
          )
        })}
    </Routes>
  )
}

export default App
