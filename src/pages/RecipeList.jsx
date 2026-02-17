import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import RecipeCard from '../components/RecipeCard';
import { recipeService } from '../services/recipeService';

const RecipeList = () => {
    const [recipes, setRecipes] = useState([]);
    
    

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
    
    console.log(recipes);
    return (
        <div className="flex justify-evenly">
            {recipes.map((recipe) => (
                    <RecipeCard key={recipe.id} recipe={recipe} />
                
            ))}
        </div>
    )

    
    
}


export default RecipeList;