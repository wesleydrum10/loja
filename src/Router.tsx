import {Routes, Route} from 'react-router-dom'
import Products from './pages/Products'
import Checkout from './pages/Checkout'

export default function Router() {
  return(
    <Routes>
      <Route path='/' element={<Products/>}/>
      <Route path='/checkout' element={<Checkout/>}/>
    </Routes>
  )
}