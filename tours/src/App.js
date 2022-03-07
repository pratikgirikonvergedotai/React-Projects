import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'

const url = 'https://course-api.com/react-tours-project'

// defining App component
function App() {
  // using useState hook for loading , tours
  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])


  // removing tour 
  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }

  // fetching tours from api
  const fetchTours = async () => {
    setLoading(true)
    try {
      const response = await fetch(url)
      const tours = await response.json()
      setLoading(false)
      setTours(tours)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }
  useEffect(() => {
    fetchTours()
  }, [])
  // conditional rendering of loading , tours
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }
  
  if (tours.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>no tours left</h2>
          <button className='btn' onClick={() => fetchTours()}>
            refresh
          </button>
        </div>
      </main>
    )
  }
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  )
}

export default App
