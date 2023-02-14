import About from "./pages/About";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Returns from "./pages/Returns";
import Home from "./pages/Home.jsx";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

const App = () => {
  const user = true
  return (
  <Router>
    <Routes>
      <Route 
        path = "/" element ={<Home />}>
      </Route>
      <Route 
        path = "/About" element ={<About />}>
      </Route>
      <Route 
        path = "/Cart" element ={<Cart />}>
      </Route>
      <Route 
        path = "/Login" element={Login ? <Navigate to="/" /> : <Login />}>
      </Route>
      <Route 
        path = "/Product/:id" element ={<Product />}>
      </Route>
      <Route 
        path = "/ProductList" element ={<ProductList />}>
      </Route>
      <Route 
        path = "/Register" element ={<Register />}>
      </Route>
      <Route 
        path = "/Returns" element ={<Returns />}>
      </Route>
    </Routes>
  </Router>
  
  )
};

export default App;