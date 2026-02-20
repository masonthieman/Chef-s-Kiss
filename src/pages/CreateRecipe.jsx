import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import RecipeCard from "../components/RecipeCard";
const CreateRecipe = () => {
  const navigate = useNavigate();
  const [recipeData, setRecipeData] = useState({
    name: "",
    cookTime: 0,
    category: "",
    createdAt: "",
    description: "",
    difficulty: "Medium",
    imageUrl: "",
    ingredients: [],
    instructions: [],
    prepTime: 0,
    servings: 0,
    tags: [],
  });

  const handleChange = (e) => {
    // Extract the text value and field name from component upon input
    const value = e.target.value;
    const key = e.target.name;

    // Create a new state out of existing recipe data then set recipe data state to modified new state
    setRecipeData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const addIngredient = () => {
    setRecipeData((prev) => ({
      ...prev,
      ingredients: [...prev.ingredients, ""],
    }));
  };

  const removeIngredient = (index) => {
    setRecipeData((prev) => ({
      ...prev,
      ingredients: [
        ...prev.ingredients.slice(0, index),
        ...prev.ingredients.slice(index + 1),
      ],
    }));
  };
  const handleIngredientChange = (value, index) => {
    setRecipeData((prev) => ({
      ...prev,
      ingredients: [
        ...prev.ingredients[(0, index)],
        value,
        ...prev.ingredients[index + 1],
      ],
    }));
  };

  const handleSubmit = (e) => {};

  return (
    <>
      <h1 className="text-3xl font-bold mb-6">Create New Recipe</h1>
      <p>Recipe form will go here...</p>

      <form className="max-w-2xl mx-auto p-6">
        <div className="mb-4">
          <div className="mb-4">
            <label className="block font-bold mb-2" htmlFor="name">
              Name:{" "}
            </label>
            <input
              className="w-full px-4 py-2 border rounded-lg"
              id="nameInput"
              onChange={handleChange}
              type="text"
              name="name"
              required
            />
          </div>
          <label htmlFor="descriptionInput">Description: </label>
          <input
            id="descriptionInput"
            onChange={handleChange}
            type="text"
            name="description"
          />

          <label htmlFor="prepInput">Prep Time: </label>
          <input
            id="prepInput"
            onChange={handleChange}
            type="number"
            name="prepTime"
          />

          <label htmlFor="cookInput">Cook Time: </label>
          <input
            id="cookInput"
            onChange={handleChange}
            type="number"
            name="cookTime"
          />

          <label htmlFor="servingsInput">Servings: </label>
          <input
            id="servingsInput"
            onChange={handleChange}
            type="number"
            name="servings"
          />

          <label htmlFor="difficultyInput">Difficulty: </label>
          <input
            name="difficulty"
            value="Easy"
            id="difficultyEasy"
            onChange={handleChange}
            type="radio"
          />
          <label htmlFor="difficultyEasy">Easy</label>
          <input
            name="difficulty"
            value="Medium"
            id="difficultyMedium"
            onChange={handleChange}
            type="radio"
          />
          <label htmlFor="difficultyMedium">Medium</label>
          <input
            name="difficulty"
            value="Hard"
            id="difficultyHard"
            onChange={handleChange}
            type="radio"
          />
          <label htmlFor="difficultyHard">Hard</label>
          <div className="mb-6">
            <label className="block font-bold mb-2" htmlFor="ingredientsList">
              Ingredients
            </label>
            
            {recipeData.ingredients.map((ingredient, index) => (
                
              <div>
                
                <input
                  key={index}
                  name="ingredients"
                  type="text"
                  onChange={handleIngredientChange(ingredient, index)}
                  value={recipeData.ingredients[index]}
                  placeholder="e.g., 2 cups of flour"
                />
                
             </div>
            ))}
            
            </div>
          </div>
        <button onClick={addIngredient}>+ Add Ingredient</button>
        
        <div>
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
        </div>
      </form>
    </>
  );
};

export default CreateRecipe;
