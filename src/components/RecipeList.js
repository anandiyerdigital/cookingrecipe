import { Link } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'
import { doc, deleteDoc } from "firebase/firestore";
import { setDoc, addDoc, collection, getDoc } from "firebase/firestore"; 
import { projectFirestore } from '../firebase/config';


// styles
import './RecipeList.css'

export default function RecipeList({ recipes }) {
  const { mode } = useTheme()

  const handleClick = async(id) => {
    
    await deleteDoc(doc(projectFirestore, "recipes", id));
    // const docRef = doc(db, "cities");
    // const docSnap = await getDoc(docRef);
    window.location.reload(false);

  }

  if (recipes.length === 0) {
    return <div className="error">No recipes to load...</div>
  }

  return (
    <div className="recipe-list">
      {recipes.map(recipe => (
        

          <div className="card w-96 bg-base-100 shadow-xl">
  <div key={recipe.id}  className="card-body">
    <h2 className="card-title">{recipe.title}</h2>
    <p>{recipe.cookingTime} to make.</p>
    <div>{recipe.method.substring(0, 100)}...</div>
          <Link to={`/recipes/${recipe.id}`}>
            
            Cook This
        
            
            </Link>
            <button className="btn btn-outline btn-info" onClick={() => handleClick(recipe.id)}>Delete</button>
         
  </div>

  
  
</div>



     
      ))}





    </div>
  )

        


}
