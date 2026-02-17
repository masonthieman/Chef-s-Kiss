import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import RecipeCard from '../components/RecipeCard';
import { recipeService } from '../services/recipeService';

const RecipeList = () => {
    const [recipes, setRecipes] = useState([]);
    
    // Fetch all recipes in database upon mounting the recipe list component
    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const recipeData = await recipeService.getAllRecipes()
                setRecipes(recipeData);
            } catch (error) {
                console.error("Failed to fetch recipes", error)
            }
        }
        fetchRecipes();
    },[]);
    
    // Map through all returned recipes and create a recipe card out of each recipe
    return (
        <div className="flex justify-evenly">
            {recipes.map((recipe) => (
                    <RecipeCard key={recipe.id} recipe={recipe} />
                
            ))}
        </div>
    )

    
    
}


export default RecipeList;