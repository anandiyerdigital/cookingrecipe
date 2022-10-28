import { useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import { useTheme } from '../../hooks/useTheme'

import { updateDoc } from "firebase/firestore";
import { projectFirestore } from '../../firebase/config'
import { useEffect, useState } from 'react'
import {collection, addDoc, doc, getDoc, getDocs} from 'firebase/firestore'

// styles
import './Recipe.css'

export default function Recipe() {
  const { id } = useParams()
 
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(null)

  const { mode } = useTheme()


  useEffect(() => {
    
    getData()
 

  },[id])

  const getData = async() => {
    const querySnapshot = await getDocs(collection(projectFirestore, "recipes"));
    
    const docRef = doc(projectFirestore, "recipes", id);
    const docSnap = await getDoc(docRef);
    setData(docSnap.data())
    console.log(data)
    

   

  }

  const handleEdit = async() => {
    const recipeRef = doc(projectFirestore, "recipes", id);
    console.log(id)
    console.log(recipeRef + "Ready for update")
// Set the "capital" field of the city 'DC'
//     await updateDoc(recipeRef, {
//   capital: true
// });

  }


  return (
    <div className={`card-body w-96 recipe ${mode}`}>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && (
        <>
          <h2 className="card-title">{data.title}</h2>
          <p>Takes {data.cookingTime} to cook..</p>
          <ul>
            {data.ingredients.map((ing) => <li>{ing}</li>)}
          </ul>
          <p className="method">{data.method}</p>
        </>
      )}
      <button className="btn btn-outline btn-success" onClick={handleEdit}>Edit</button>
    </div>
  )
}