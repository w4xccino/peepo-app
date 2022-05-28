import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import Peepoapp from "./components/Peepoapp";
import Producto from "./components/Producto";
import { ProtectedRoutes } from "./ProtectedRoutes";
import User from "./components/User";
import Mainpage from "./components/Mainpage";
import Payments from "./components/Payments";
import PageNotFound from "./components/PageNotFound";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact element={<ProtectedRoutes />}>
          <Route exact path="/productos" element={<Peepoapp />} />
          <Route exact path="/productos/:product_id" element={<Producto />} />
          <Route exact path="/user" element={<User />} />
          <Route exact path="/" element={<Mainpage />} />
          <Route exact path="/payments" element={<Payments />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
