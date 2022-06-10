import React from "react";
import Footer from "./templates/footer";
import Navbar from "./templates/Navbar.jsx";
import { Link } from "react-router-dom";

function Mainpage() {
  return (
    <div>
      <Navbar />
      <div className="w-full h-24 hidden lg:flex"> </div>

      <div className="flex justify-center">

  <div className="carousel h-auto max-w-full p-4 space-x-4 bg-base-300 rounded-box">
    <div className="carousel-item h-64 w-auto">
      <img src={require("../imagenes/jordan.png")} alt="" />
    </div> 
    <div className="carousel-item h-64 w-auto">
      <img src={require("../imagenes/computadora completa.png")} alt="" />
    </div> 
    <div className="carousel-item h-64 w-auto">
      <img src={require("../imagenes/polo.jpg")} alt="" />
    </div> 
    <div className="carousel-item h-64 w-auto">
      <img src={require("../imagenes/silla.jpg")} alt="" />
    </div> 
    <div className="carousel-item h-64 w-auto">
      <img src={require("../imagenes/p30.png")} alt="" />
    </div> 
  </div>
        
      </div>

      <div className="flex justify-center bg-base-100 p-1">
        <div className="hero-content flex-col lg:flex-row w-full">
            <img
              src={require("../imagenes/logo.png")}
              className="max-w-sm rounded-lg shadow-2xl w-96 h-96"
              alt="d"
            />
        <div>
          
      <h1 className="text-5xl font-bold text-yellow-400">PeepoApp</h1>
      <p className="py-6 text-white ">Bienvenido a PeepoApp, Navega y descubre variedad de productos de segunda mano.
                      Enviamos a más de 100 destinos nacionales, directamente a la puerta de su casa.
                      Tenemos variedad de productos de acuerdo a su necesidad en las
                      siguientes categorias:</p>

        <div className="w-80 h-4 flex justify-around">
          <div className="badge badge-info">Tecnologia</div>
          <div className="badge badge-success">Hogar</div>
          <div className="badge badge-warning">Electronica</div>
          <div className="badge badge-error">Moda</div>
        </div>
        <br></br>     

          <Link to="/productos" className="btn bg-fuchsia-600 text-white w-56 flex justify-around">
            Empieza a comprar
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
      </div>
    </div>
  </div>
    <div className="w-full h-24 hidden lg:flex"> </div>
      <Footer />
</div>
  );
}
export default Mainpage;
