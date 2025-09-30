import React from 'react'
import Nvabar from './components/Nvabar'
import Sidebar from './components/Sidebar'

const App = () => {
  return (
    <div className='bg-gray-50 min-h-screen'>
      <>
      <Nvabar />
      <hr />
      <div className='flex w-full'>
              <Sidebar />
      </div>
</>
    </div>
  )
}

export default App