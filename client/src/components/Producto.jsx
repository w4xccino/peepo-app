import React from "react";
import Footer from './templates/footer';
import Navbar from './templates/Navbar.jsx';

function Producto(){
    return(
<body>
{/* Barra de Navegacion dentro del body */}
<Navbar/>

<div className=" w-full min-h-screen flex flex-wrap justify-center p-6 bg-base-100">
    
<div className="card w-96 h-full bg-white shadow-xl py-12">
  <figure className="px-3 pt-3">
    <img src={require('../imagenes/p30.png')} alt="Shoes" className=" h-64 w-auto rounded-xl" />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-neutral">Huawei P30 lite 4/128Gb</h2>
    <p className="text-neutral">S/150 --> S/100</p>
    <h2 className="card-title text-neutral">Descripcion</h2>
    <p className="text-neutral">Smartphone Huawei P30 pro de segundo uso. El equipo esta en perfecto estado 8/10, no tiene reparaciones. Me puede pagar por yape o tunki, solo interesados no sapos</p>
    <br />
    <br />
    <div className="card-actions justify-center">
      <button className="btn btn-primary">Visualizar en AR</button>
      <button className="btn btn-warning">Agregar al carrito</button>
    </div>
  </div>
</div>
</div>

<Footer />
</body>
    )
}

export default Producto;