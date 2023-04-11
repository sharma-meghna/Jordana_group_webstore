import { Routes, Route, Navigate} from 'react-router-dom';

import Home from '../pages/Home';
import Shop from '../pages/Shop';
import Cart from '../pages/Cart';
import ProductDetails from '../pages/ProductDetails';
import Checkout from '../pages/Checkout';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import ComingSoon from '../components/Coming soon/ComingSoon';


const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to='home'/>} />
        <Route path="home" element={<Home/>}/>
        <Route path='shop' element={<ComingSoon/>}/>
        <Route path='shop/:id' element={<ProductDetails/>}/>
        <Route path='cart' element={<ComingSoon/>}/>
        <Route path='checout' element={<Checkout/>}/>
        <Route path='login' element={<ComingSoon/>}/>
        <Route path='signup' element={<ComingSoon/>}/>
        <Route path='comingsoon' element={<ComingSoon/>}/>
    </Routes>
  );
};

export default Routers;
