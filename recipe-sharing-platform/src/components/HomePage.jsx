import React from 'react'
import { useState, useEffect } from 'react';
import recipesData from '../data.json'

function HomePage() {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        setRecipes(recipesData);
    }, [])
  return (
   <div className='flex flex-col items-center justify-center min-h-screen px-4'>
    <h1 className='text-3xl font-bold mb-4'>Recipe <span className=' text-yellow-300'>Sharing</span> Platform</h1>
     <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 p-4'>
      {recipes.map(
        (recipe) => (
            <div key={recipe.id} className="recipe-card p-2 flex flex-col items-center gap-2 bg-white shadow-md hover:shadow-lg hover:scale-105 transition-all rounded-2xl">
                <img src={recipe.image} alt={recipe.title} className=' w-[300px] h-[300px] bg-center rounded-2xl'/>
                <h1 className=' text-xl font-semibold '>{recipe.title}</h1>
                <p className=' text-base text-center'>{recipe.summary}</p>
            </div>
        )
      )}
    </div>
   </div>
  )
}

export default HomePage
