import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './RecipeCard.module.css';

const RecipeCard = ({recipe}) => {
    const navigate = useNavigate();

    // Navigate to recipe details page upon clicking any part of recipe card
    const handleClick = () => {
        navigate(`/recipes/:${recipe.id}`)
    }

    return (
        <div onClick={handleClick} 
        className="bg-white rounded-lg shadow-md overflow-hidden
                    cursor-pointer
                    hover:shadow-xl hover:scale-105
                    transition-all duration-300">
            <img 
            src={recipe.imageUrl}
            alt={recipe.name}
            className="w-full h-48 object-cover"
            />

            <div className="p-4">
                <h2 className="text-xl font-bold mb-2">
                    {recipe.name}
                </h2>
            </div>
            <div className="flex justify-between text-sm text-gray-500">
                <p>Total Time: {recipe.cookTime} minutes</p>
                <p>Difficulty: {recipe.difficulty}</p>
            </div>
        </div>
    )
}

export default RecipeCard;