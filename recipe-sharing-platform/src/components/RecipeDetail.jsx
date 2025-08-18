import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import recipesData from "../data.json";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    const foundRecipe = recipesData.find(
      (recipe) => recipe.id === parseInt(id)
    );
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-3xl ">Oops! Recipe not found.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold mb-4 ">
        Recipe <span className=" text-yellow-400">Details</span>
      </h1>
      <div className="recipe-detail flex flex-col items-center gap-2">
        <h1 className=" text-xl text-center p-4 font-semibold ">
          {recipe.title} Details
        </h1>
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-[300px] sm:w-[450px] h-[250px] sm:h-[350px] bg-center rounded-sm"
        />
        <p className=" text-base text-justify p-6 w-[340px] sm:w-lg">
          {recipe.details}
        </p>
        <h2 className=" text-lg font-semibold">Ingredients</h2>
        <ul className="list-disc list-inside">
          {recipe?.ingredients?.map((ingredient, index) => (
            <li key={index} className="text-base w-sm ">
              {ingredient}
            </li>
          ))}
        </ul>
        <h2 className=" text-lg font-semibold">Instructions</h2>
        <p className=" text-base text-justify p-6 w-[340px] sm:w-lg">
          {recipe.instructions}
        </p>
      </div>
    </div>
  );
}

export default RecipeDetail;
