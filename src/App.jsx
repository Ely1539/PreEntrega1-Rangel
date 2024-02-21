import './styles/App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemlistContainer'
import Footer from './components/Footer'
import Cart from './components/Cart'
import Checkout from './components/Checkout'
import ItemDetailsContainer from './components/ItemDetailsContainer'
import NotFound from './components/NotFound'
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/category/:iid' element={<ItemListContainer />} />
        <Route path='/product/:pid' element={<ItemDetailsContainer />} />
        <Route path='/Cart' element={<Cart />} />
        <Route path='/Checkout' element={<Checkout />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
export default App