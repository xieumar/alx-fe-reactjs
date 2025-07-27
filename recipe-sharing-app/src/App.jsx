import React from 'react'
import './App.css'
import RecipeList from './components/RecipeList'
import AddRecipeForm from './components/AddRecipeForm'
import RecipeDetails from './components/RecipeDetails';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
 

  return (
    <div >
    <BrowserRouter>
      <Routes>
          <Route path= "/" element={
          <>
            <AddRecipeForm />
            <RecipeList />
          </>} />
          <Route path="/recipes/:id" element={<RecipeDetails />} />
      </Routes>
        
    </BrowserRouter>
    </div>
    
   
  )
}

export default App;
