import React from 'react'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemlistContainer'

const App = () => {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting={"RS CAR DETAILING"}/>
    </div>
  )
}
export default App