import React from "react";
import { Link } from "react-router-dom";

function CardProduct(props) {
  return (
    <div className="card card-compact w-80  bg-white shadow-2xl m-2">
      <figure className="h-64 w-auto">
        <a href={props.link}>
          <img
            src={require(`../../imagenes/${props.imagen}`)}
            alt="Shoes"
            className="h-64 w-auto"
          />
        </a>
      </figure>
      {/* Iso de plantillas literales para prop.imagen*/}
    <div className="card w-80 h-56 bg-base-100 shadow-xl">
      <div className="card-body items-center text-center bg-white">
      <h2 className="card-title text-black ">{props.producto}</h2>
        <h2 className="card-title text-black ">S/{props.precio}</h2>

        <div className="rating">
          <input type="radio" name="rating-4" className="mask mask-star-2 bg-yellow-300" />
          <input type="radio" name="rating-4" className="mask mask-star-2 bg-yellow-300"/>
          <input type="radio" name="rating-4" className="mask mask-star-2 bg-yellow-300" />
          <input type="radio" name="rating-4" className="mask mask-star-2 bg-yellow-300" />
          <input type="radio" name="rating-4" className="mask mask-star-2 bg-yellow-300" />
        </div>
      </div>
    {/*Boton de redireccionamiento al producto individual / aun nose como hacer esto  para cada productoxd*/}
    <Link to={props.link} className="btn btn-primary">
            Comprar
          </Link>
    </div>
    </div>
  );
}

export default CardProduct;
