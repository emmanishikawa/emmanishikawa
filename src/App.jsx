import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <div id='nav-bar'></div>

      <div className='flex justify-center'>
        <div id='content' className='flex flex-col items-center justify-center w-[55%] mt-28 text-left'>
          <section id='intro' className='flex flex-col w-full mb-12'>
            <h1 className='font-[Kodomo] text-left text-4xl text-white'>
              introduction
            </h1>{/**nunito -> open sans later */}
            <div className=''>
              <p className='font-[Nunito] mt-5'> 
                Hello! I'm Emma Nishikawa, an undergraduate student studying cognitive science with a specialization in machine learning and neural computing at UC San Diego.
              </p>
              <p className='mt-5'>As an aspiring developer and designer, I'm passionate about creating practical yet unique applications to solve real world issues. 
                While I am continuously learning and growing my technical skills, I believe that my current abilities and values in frontend development, research, and data science, will allow me to contribute a fresh perspective in any environment.</p>
              <p className='mt-5'>In my free time, I enjoy discovering new cafes to visit and listening to music!</p>
            </div>
            <button onClick={() => window.location = 'mailto:enishikawa@ucsd.edu'} className='mt-5 p-6 w-40 rounded-lg border-2 border-[#222225] text-white cursor-pointer hover:bg-[#141417] ease-in-out transition-[2s]'>Let's connect!</button>
          </section>

        <hr className="border-2 border-solid border-[#222225] w-full"/>
          
          <section id='projects' className='flex flex-col w-full mt-12'>
            <h1 className='font-[Kodomo] text-left text-4xl text-white'>
              projects <span className='text-[16px]'>*work in progress</span>
            </h1>{/**nunito -> open sans later */}
            
            <div id='lovefilm' className='mt-5'>
              <p className='font-[Nunito] text-white text-[24px] font-bold'> 
                love (愛) film
              </p>
            </div>
            <div id='ota' className='mt-5'>
              <p className='font-[Nunito] text-white text-[24px] font-bold'> 
                Out the Archive
              </p>
            </div>
            <div id='personal-portfolio'>
              <p className='font-[Nunito] text-white text-[24px] font-bold'> 
                personal portfolio
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default App
