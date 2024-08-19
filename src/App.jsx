import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import Footer from './components/footer/Footer'
import About from './pages/about/About'
import News from './pages/news/News'
import Catalog from './pages/catalog/Catalog'
import SinglePage from './pages/single/SinglePage'
import WishlistPage from './pages/wishlistPage/WishlistPage'
import CartPage from './pages/cart/CartPage'
import AnOrderPage from './pages/anOrderPage/AnOrderPage'
import OrderThanks from './components/anOrder/OrderThanks'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/news' element={<News />} />
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/single/:id' element={<SinglePage />} />
        <Route path='/wishlist' element={<WishlistPage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/order' element={<AnOrderPage />} />
        <Route path='/order-thanks' element={<OrderThanks />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
