import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ProductDetails from './pages/ProductDetails';
import Shop from './pages/Shop';
import ProtectedRoute from './utils/ProtectedRoute';
import MyCart from './pages/MyCart';
import MyWishList from './pages/MyWishList';
import Checkout from './pages/Checkout';

function App() {
  document.title = "App"
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/productDetails/:id'  element={<ProductDetails/>}/>
          <Route path='/shop' element={<Shop/>} />      
          <Route path='/cart' element={<ProtectedRoute> <MyCart /> </ProtectedRoute>} />
          <Route path='/wishlist' element={<ProtectedRoute> <MyWishList /> <MyCart /> </ProtectedRoute>} />
          <Route path="/checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
