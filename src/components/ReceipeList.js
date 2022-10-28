import React from 'react'
import './RecipeList.css'
import { Link } from 'react-router-dom'

const ReceipeList = ({recipes}) => {
  return (
    <div className='recipe-list'>
        {recipes.map((recipe) => (
            <div className='card' key={recipe.id}>
                <h3>{recipe.title}</h3>
                <p>{recipe.cookingTime} to cook</p>
                <div>{recipe.method.substring(0, 100)}...</div>
                <Link to={`/recipes/${recipe.id}`}>Cook This</Link>
            <h2>Hello</h2>     
            
             </div>


          
        ))}

    </div>
  )
}

export default ReceipeList