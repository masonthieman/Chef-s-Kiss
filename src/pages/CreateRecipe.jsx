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
    // Extract the text value and field name from basic component upon input
    const value = e.target.value;
    const key = e.target.name;

    // Create a new state out of existing recipe data then set recipe data state to modified new state
    setRecipeData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  // Renders the first empty element of an array of input fields
  const addListItem = (key) => {
    setRecipeData((prev) => ({
      ...prev,
      [key]: [...prev[key], ""],
    }));
  };

  // Removes the element of the specified list at index
  const removeItem = (key, index) => {
    setRecipeData((prev) => ({
      ...prev,
      [key]: [...prev[key].slice(0, index), ...prev[key].slice(index + 1)],
    }));
  };

  // Watches the user's input as they update the list
  const handleItemChange = (key, value, index) => {
    setRecipeData((prev) => ({
      ...prev,
      [key]: [
        ...prev[key].map((item, i) => {
          if (index === i) {
            return value;
          } else {
            return item;
          }
        }),
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
              <div key={index}>
                <input
                  name="ingredients"
                  type="text"
                  onChange={(e) =>
                    handleItemChange("ingredients", e.target.value, index)
                  }
                  value={recipeData.ingredients[index]}
                  placeholder="e.g., 2 cups of flour"
                />
                <button onClick={() => removeItem("ingredients", index)}>
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>
        <button onClick={() => addListItem("ingredients")}>
          + Add Ingredient
        </button>
        <div className="mb-6">
          <label className="block font-bold mb-2" htmlFor="instructionsList">
            Instructions
          </label>
          {recipeData.instructions.map((instruction, index) => (
            <div key={index}>
              <h1>{index + 1}. </h1>
              <input
                name="instructions"
                type="text"
                onChange={(e) =>
                  handleItemChange("instructions", e.target.value, index)
                }
                value={instruction}
              />
              <button onClick={() => removeItem("instructions", index)}>
                Remove
              </button>
            </div>
          ))}
        </div>
        <button onClick={() => addListItem("instructions")}>+ Add Step</button>
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
