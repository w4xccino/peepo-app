import React from "react";
import Footer from "./templates/footer";
import Navbar from "./templates/Navbar.jsx";
import { Link } from "react-router-dom";

function Mainpage() {
  return (
    <div>
      <Navbar />
      <div className="w-full min-h-screen bg-base-100 p-6">
        <div className="hero bg-base-20">
          <img
            src={require("../imagenes/logo.png")}
            className="max-w-sm rounded-lg shadow-2xl"
            alt="d"
          />
        </div>
        <br></br>

        <div className="flex justify-center">
          <h1 className="text-5xl font-bold">PeepoApp</h1>
        </div>
        <div className="flex justify-center">
          <div className="w-96 h-auto">
            <p className="text-justify py-6">
              Bienvenido a PeepoApp comienze a buscar sus productos favoritos y
              llenarlos en el carrito de compras! Tenemos todo para ti :3
              Tenemos muchos productos de acuerdo asu necesidad en las
              siguientes categorias:
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="badge badge-info">Tecnologia</div>
          <div className="badge badge-success">Electrodomesticoss</div>
          <div className="badge badge-warning">Carpinteria</div>
          <div className="badge badge-error">Belleza</div>
        </div>
        <br></br>
        <div className="flex justify-center">
          <Link to="/productos" className="btn btn-primary">
            Empieza a comprar!
          </Link>
        </div>

        <br></br>

        <div className="flex justify-center">
          <div className="carousel rounded-box w-80 h-80">
            <div id="item1" className="carousel-item">
              <img
                src="https://api.lorem.space/image/burger?w=400&h=300&hash=8B7BCDC2"
                alt="Burger"
              />
            </div>
            <div id="item2" className="carousel-item">
              <img
                src="https://api.lorem.space/image/burger?w=400&h=300&hash=500B67FB"
                alt="Burger"
              />
            </div>
            <div id="item3" className="carousel-item">
              <img
                src="https://api.lorem.space/image/burger?w=400&h=300&hash=A89D0DE6"
                alt="Burger"
              />
            </div>
            <div id="item4" className="carousel-item">
              <img
                src="https://api.lorem.space/image/burger?w=400&h=300&hash=225E6693"
                alt="Burger"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center w-full py-2 gap-2">
          <a href="#item1" className="btn btn-xs">
            1
          </a>
          <a href="#item2" className="btn btn-xs">
            2
          </a>
          <a href="#item3" className="btn btn-xs">
            3
          </a>
          <a href="#item4" className="btn btn-xs">
            4
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Mainpage;
