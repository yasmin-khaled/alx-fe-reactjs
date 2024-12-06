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
      
    return(
        <div className="container mx-auto p-4">
            <div className="bg-white rounded-lg shadow-lg p-6">
                <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="w-full h-64 object-cover rounded-t-lg"
                />
                <h1 className="text-2xl font-bold my-4">{recipe.title}</h1>
                <p className="text-gray-600">{recipe.summary}</p>
                {/* Add more fields like ingredients and steps here */}
            </div>
       </div>
    );
}

export default RecipeDetail;