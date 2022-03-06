import React, { useState } from 'react'
import SingleColor from './SingleColor'

// import values for different shades for colours 
import Values from 'values.js'

function App() {
  // using state hook
  // state for color
  const [color, setColor] = useState('')
  // state for error when color is not present
  const [error, setError] = useState(false)
  // setting list of color values 
  const [list, setList] = useState(new Values('#f15025').all(10))



  // handling onchange event 
  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      // calling all method on values 
      let colors = new Values(color).all(10)
      setList(colors)
    } catch (error) {
      setError(true)
      console.log(error)
    }
  }

  return (
    <>
      <section className='container'>
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder='#f15025'
            // rendering conditionally for error
            className={`${error ? 'error' : null}`}
          />
          <button className='btn' type='submit'>
            submit
          </button>
        </form>
      </section>
      <section className='colors'>
        {list.map((color, index) => {
          return (
            <SingleColor
              key={index}
              {...color}
              index={index}
              hexColor={color.hex}
            />
          )
        })}
      </section>
    </>
  )
}

export default App
