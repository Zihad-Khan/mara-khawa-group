import React from 'react'
import { Link } from 'react-router-dom'
import cake from './images/cake.jpg'

function Home() {
  return (
    
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={cake}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div className="max-w-md">
            <h1 className="text-5xl font-bold text-gray-400">Hello Everyone!</h1>
            <p className="py-6 text-amber-50">
                Thank you all for giving me such <span className='text-gray-400'>warm wishes</span> and <span className='text-gray-400'>celebrations</span> on my birthday.I am really grateful to <span className='text-gray-400'>GOD</span> for making me a part of such a <span className='text-gray-400'>beautiful friend circle</span>.I have never expected things at this extent but you guys really surprised me with such pleasants.Here is a small gratitude collection from my side.
            </p>
            <button className="btn btn-primary bg-rose-600"><Link to={'/gallery'}>Check Out!</Link></button>
          </div>
      </div>
    </div>
  )
}

export default Home