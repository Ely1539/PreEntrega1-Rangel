import './styles/App.css'
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemlistContainer'
import Footer from './components/Footer'
import Cart from './components/Cart'
import Checkout from './components/Checkout'
import ItemDetailsContainer from './components/ItemDetailsContainer'
import NotFound from './components/NotFound'
import { CarritoProvider } from './context/cartContext.jsx'
import { ToastContainer } from 'react-toastify'
const App = () => {
  return (
    <BrowserRouter>
      <CarritoProvider>
        <Navbar />
        <ToastContainer/>
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:cid' element={<ItemListContainer />} />
          <Route path='/product/:pid' element={<ItemDetailsContainer />} />
          <Route path='/Cart' element={<Cart />} />
          <Route path='/Checkout' element={<Checkout />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </CarritoProvider>
    </BrowserRouter>
  )
}
export default App