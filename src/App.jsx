import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import { BrowserRouter as Router,
Routes,
Route,
Navigate
} from "react-router-dom";



const App = () => {
  const user = true;
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/products/:category" element={<ProductList />} />
      </Routes>
      <Routes>
        <Route path="/Product/:id" element={<Product />} />
      </Routes>
      <Routes>
        <Route path="/Cart" element={<Cart />} />
      </Routes>
      <Routes>
        <Route path="/login" element={user ? <Navigate to="/"/> : <Login/>} />
      </Routes>
      <Routes>
        <Route path="/register" element={user ? <Navigate to="/"/> : <Register />} />
      </Routes>
    </Router>
  );
};

export default App;