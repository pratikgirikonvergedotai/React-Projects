import React, { useState } from 'react'
import data from './data'
import SingleQuestion from './Question'

// defining App component
function App() {
  // using useState hook
  const [questions, setQuestions] = useState(data)
  // looping over array for questions
  return (
    <main>
      <div className='container'>
        <h3>questions and answers about login</h3>
        <section className='info'>
          {questions.map((question) => {
            return (
              <SingleQuestion key={question.id} {...question}></SingleQuestion>
            );
          })}
        </section>
      </div>
    </main>
  )
}

export default App
