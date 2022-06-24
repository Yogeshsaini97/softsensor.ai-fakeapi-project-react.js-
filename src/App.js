import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import "../src/CSSfolder/Navbar.css"
import { BrowserRouter } from "react-router-dom";
import { Routes, Route} from "react-router-dom";
import Products from './Components/Products';
import Loading from './Components/Loading';
import productCategories from './Components/productCategories';
import MoreAboutUS from './Components/MoreAboutUS';
import NearbyShops from './Components/NearbyShops';

function App() {
  return (
    <BrowserRouter>
    
    <div className="App">
   
    
    <Navbar/>
    <Routes>
    
    <Route exact path="/" element={<Products/>}/>
    <Route exact path="/productcategories" element={<productCategories/>}/>
    <Route exact path="/moreaboutus" element={<MoreAboutUS/>}/>
    <Route exact path="/nearbyshops" element={<NearbyShops/>}/>
    </Routes>
      
    
    </div>
    </BrowserRouter>
    
  );
}

export default App;
