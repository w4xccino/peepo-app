import React from "react";
import { Link } from "react-router-dom";

function CardProduct(props){
    return(
        <div className=" card card-compact w-96 bg-white shadow-2xl ">
        <figure><img src={require(`../../imagenes/${props.imagen}.png`)} alt="Shoes" className="h-64 w-auto" /></figure>    {/* Iso de plantillas literales para prop.imagen*/}
        <div className="card-body">
            <h2 className="card-title text-yellow-500">S/{props.precio}</h2>
            <p>{props.producto}</p>
          <div className="card-actions justify-end">
          {/*Boton de redireccionamiento al producto individual / aun nose como hacer esto  para cada productoxd*/ }
          <Link to="/Producto" className="btn btn-primary">
            Comprar
          </Link>
          </div>
        </div>
      </div>
    )
}

export default CardProduct;