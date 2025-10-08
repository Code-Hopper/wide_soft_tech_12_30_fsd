import React from 'react'
import { useState } from 'react';
import image from "./assets/media/image1.jpg"

const App = () => {

  let [count, setCount] = useState(0)

  const handleClick = () => {
    setCount((prev) => prev + 1)
    console.log(count)
  }

  return (
    <>
      {/* <h1 className='text-2xl text-red-700 bg-[rgba(255,255,0)] flex mx-[10rem] hover:text-blue-500 transition-all'>this is React with tailwind</h1>
      <h1 class=""></h1>
      <img src={image} />
      <img src={image} />
      <img src={image} />
      <img src={image} /> */}

      <div className='flex flex-col items-center'>

        {
          count == 0 ? <h1>Count is Zero please use the button to start count !</h1> : <h1 className='text-2xl font-bold my-10'>
            count is {count}
          </h1>
        }

        <button onClick={handleClick} className='font-bold bg-green-500 p-2 text-center'>
          increase count
        </button>

        {/* controlled componetns */}

        {/* conditional rendering */}

      </div>
    </>
  )
}

export default App