import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        const recipeDetail = data.find((r) => r.id === parseInt(id));
        setRecipe(recipeDetail);
      });
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover rounded-t-lg"
        />
        <h1 className="text-2xl font-bold my-4">{recipe.title}</h1>
        <h2 className="text-2xl font-bold my-4">Ingredients</h2>
        <p className="text-gray-600">{recipe.summary}</p>
        <h2 className="text-2xl font-bold my-4">Instructions</h2>
        <ol className="list-disc pl-6 space-y-2">
          {recipe.instructions.map((step, index) => (
            <li key={index} className="text-gray-700">
              {step}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default RecipeDetail;
