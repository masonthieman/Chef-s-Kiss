import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './RecipeCard.module.css';

const RecipeCard = ({recipe}) => {

    return (
        <div>
            <img 
            src={recipe.imageUrl}
            alt={recipe.name}/>
            <h2>{recipe.name}</h2>
            <h2>Cook Time: {recipe.cookTime}</h2>
            <h2>Difficulty: {recipe.difficulty}</h2>
        </div>
    )
}

export default RecipeCard;