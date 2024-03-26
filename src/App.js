import React from 'react'
import Scrollindicator from './components/scroll-indicator/Scrollindicator'

const App = () => {
  return (
    <div>
      <Scrollindicator url={'https://dummyjson.com/products?limit=100'}/>
    </div>
  )
}

export default App
