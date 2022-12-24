import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Dummy from './pages/Home/dummy/Dummy'
import Home from './pages/Home/Home'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      {/* <Dummy/> */}
    </div>
  )
}

export default App