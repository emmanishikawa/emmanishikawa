import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <div id='nav-bar'></div>

      <div id='content'>
        <section id='intro'>
          <h1>
            introduction
          </h1>
          <p>
            Hello! I'm Emma Nishikawa, an undergraduate student studying cognitive science with a specialization in machine learning and neural computing at UC San Diego.
          </p>
          <p>As an aspiring developer and designer, I'm passionate about creating practical yet unique applications to solve real world issues. 
            While I am continuously learning and growing my technical skills, I believe that my current abilities and values in frontend development, research, and data science, will allow me to contribute a fresh perspective in any environment.</p>
          <p>In my free time, I enjoy discovering new cafes to visit and listening to music!</p>
          <button>Let's connect!</button>
        </section>
        <section id='projects'></section>
      </div>
    </>
  )
}

export default App
