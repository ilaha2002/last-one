import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Product from './component/Product';
import {Routes, Route} from 'react-router-dom';
import Item from './component/Item';
import Cart from './component/Cart'

function App() {
  return (
    
    <div className="App">
     <Navbar/>
      <Routes>
      <Route exact path ="/" element={<Home/>}/>
      <Route exact path = "/products" element= {<Product/>}/>
      <Route exact path = "/products/:id" element = {<Item/>}/>
      <Route exact path = "/cart" element = {<Cart/>}/>
      </Routes>
    </div>
    
  );
}

export default App;