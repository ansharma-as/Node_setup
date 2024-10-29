import { useState, useEffect } from 'react'

import './App.css'
import axios from 'axios'

function App() {
  const [count, setCount] = useState(0)
  const [jokes, setJokes] = useState([])
  useEffect(() =>{
    axios.get('/api/jokes').then((response) => {
      setJokes(response.data.jokes)
      console.log(response.data.jokes)
      console.log(response)
    })
    .catch((error) => {
      console.error('Error fetching jokes:', error)
    }) 
  },[]);

  return (
    <>
      <div>
        <h1>Welcome to Website</h1>
      </div>
      <p>JOKES: {jokes.length}</p>

      {
        jokes.map((joke,index) => (
          
          <div key={index}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>
          
        ))
      }
    </>
  )
}

export default App
