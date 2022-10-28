import { projectFirestore } from '../../firebase/config'
import { useEffect, useState } from 'react'
import {collection, addDoc, doc, getDoc, getDocs} from 'firebase/firestore'

import RecipeList from '../../components/RecipeList'

// styles
import './Home.css'

export default function Home() {

  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    
    getData()
 

  },[])

  const getData = async() => {
    const querySnapshot = await getDocs(collection(projectFirestore, "recipes"));
    
    let results = []
      
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
    
      results.push({id: doc.id, ...doc.data()})

    });

    setData(results)

  }

  return (
    <div className="home">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  )
}
