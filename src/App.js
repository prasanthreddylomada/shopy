import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BuyerLogin from './components/buyerlogin';
import HomePage from './components/homepage';
import Signup from './components/signup';
import SellerLogin from './components/sellerlogin';
import BuyerHome from './components/buyerhome';
import SellerHome from './components/sellerhome';
import AddProduct from './components/addPoduct';

function App() {
  return (
    <div >
      <Router>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/buyerlogin' element={<BuyerLogin/>}/>
          <Route path='/sellerlogin' element={<SellerLogin/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/buyerhome' element={<BuyerHome/>}/>
          <Route path='/sellerhome' element={<SellerHome/>}/>
          <Route path='/sellerhome/addproduct' element={<AddProduct/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
