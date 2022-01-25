import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Success from "./pages/Success";
import Wishlist from "./pages/Wishlist";
import { BrowserRouter as Router,
Routes,
Route,
Navigate
} from "react-router-dom";
import { useSelector } from "react-redux";



const App = () => {
   const user = useSelector((state) => state.user);
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
        <Route path="/login" element={user.currentUser ? <Navigate to="/"/> : <Login/>} />
      </Routes>
      <Routes>
        <Route path="/register" element={user.currentUser ? <Navigate to="/"/> : <Register />} />
      </Routes>
      <Routes>
        <Route path="/success" element={<Success />} />
      </Routes>
      <Routes>
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>

    </Router>
  );
};

export default App;