import {Routes, Route} from 'react-router-dom'
import Checkout from './pages/checkout/Checkout'
import ProductsPage from './pages/Products/Products'

export default function Router() {
  return(
    <Routes>
      <Route path='/' element={<ProductsPage/>}/>
      <Route path='/checkout' element={<Checkout/>}/>
    </Routes>
  )
}