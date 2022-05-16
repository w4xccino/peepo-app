import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import Peepoapp from "./components/Peepoapp";
import Producto from "./components/Producto";
import { ProtectedRoutes } from "./ProtectedRoutes";
import User from "./components/User";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route element={<ProtectedRoutes />}>
          <Route exact path="/" element={<Peepoapp />} />
          <Route exact path="/user" element={<User />} />
          <Route exact path="/producto" element={<Producto />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
