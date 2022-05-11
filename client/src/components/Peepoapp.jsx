import React from 'react'
function Peepoapp(props) {
    return (

<body>
{/* Barra de Navegacion dentro del body */}

<nav>
  <div className="navbar bg-base-100">
    <div className="navbar-start">
      <div className="dropdown">
        <label tabIndex="0" className="btn btn-ghost btn-circle">
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
        </label>
        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
          <li><a href="a"><svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule ="evenodd" /></svg>Nombre </a></li>
          <li><a href="a"><svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>Productos</a></li>
          <li><a href="a"><svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>Categorias</a></li>
        </ul>
      </div>
    </div>

    {/*Barrra de busqueda*/}
    <div className="navbar-center">
      <div className="form-control ">
        <input type="text" placeholder="Search" className="input input-bordered" />
      </div>
    </div>

    <div className="navbar-end">
      <button className="btn btn-ghost btn-circle">
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
      </button>
      <button className="btn btn-ghost btn-circle">
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
      </button>
    </div>
  </div>
</nav>

 {/* Contenedor principal de la pagina */}
<div className="w-full min-h-screen bg-blue-50 p-6">
  <h1 className="font-bold text-xl text-center md:text-3xl md:mt-12 mb-4">Categorias-Estado-Precio-Descuentos </h1>
  <div className="flex flex-wrap justify-center space-y-3 space-x-3 bg-white">   {/* Color del contenedor responsive */}

 {/* Integracion de los cards productos */}

 <div className=" card card-compact w-96 bg-white shadow-2xl ">
      <figure><img src={require('../imagenes/p30.png')} alt="Shoes" className="h-64 w-auto" /></figure>
      <div className="card-body">
        <h2 className="card-title text-yellow-500">S/500</h2>
        <p>Huawei P30</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Comprar</button>
        </div>
      </div>
    </div>

    <div className="card card-compact w-96 bg-white shadow-2xl">
      <figure><img src={require('../imagenes/rtx.png')} alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title text-yellow-500">S/12000</h2>
        <p>Geforce RTX 3090</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Comprar</button>
        </div>
      </div>
    </div>

    <div className="card card-compact w-96 bg-white shadow-2xl">
      <figure><img src={require('../imagenes/avatar.png')} alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title text-yellow-500">S/400000</h2>
        <p>Romario-NFT EXCLUSIVE</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Comprar</button>
        </div>
      </div>
    </div>


    <div className="card card-compact w-96 bg-white shadow-2xl">
      <figure><img src={require('../imagenes/wofer.png')} alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title text-yellow-500">S/70</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Comprar</button>
        </div>
      </div>
    </div>

    <div className="card card-compact w-96 bg-white shadow-2xl">
      <figure><img src={require('../imagenes/rtx.png')} alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title text-yellow-500">S/12000</h2>
        <p>Geforce RTX 3090</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Comprar</button>
        </div>
      </div>
    </div>

    <div className="card card-compact w-96 bg-white shadow-2xl">
      <figure><img src={require('../imagenes/jordan.png')} alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title text-yellow-500">S/400</h2>
        <p>Zapatillas Jordan</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Comprar</button>
        </div>
      </div>
    </div>


    <div className="card card-compact w-96 bg-white shadow-2xl">
      <figure><img src={require('../imagenes/p302.png')} alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title text-yellow-500">S/70</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Comprar</button>
        </div>
      </div>
    </div>


    <div className="card card-compact w-96 bg-white shadow-2xl">
      <figure><img src={require('../imagenes/dvd.png')} alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title text-yellow-500">S/70</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Comprar</button>
        </div>
      </div>
    </div>

  </div>
</div>

 {/* AREA DEL FOOTER*/}

<footer className="footer p-10 bg-base-200 text-base-content">
  <div>
     {/* ENLACE DEL REPOSITORIO*/}                      
  <a href='https://github.com/w4xccino/peepo-app'><img src={require('../imagenes/github.png')} alt="Shoes" width="50" height="50"  /></a>
  
    <p>PeepoApp trabajando desarrollando software desde 2021</p>
  </div> 
  <div>
    <span className="footer-title">Desarrolladores</span> 
    <a href="a" className="link link-hover">Romario</a> 
    <a href="a" className="link link-hover">Diego</a> 
    <a href="a" className="link link-hover">Ronaldo</a> 
    <a href="a" className="link link-hover">RonySama</a>  
  </div> 
  <div>
    <span className="footer-title">Compania</span> 
    <a href="a" className="link link-hover">Acerca de nosotros</a> 
    <a href="a" className="link link-hover">Contactanos</a> 
    <a href="a" className="link link-hover">Proyectos</a> 
    <a href="a" className="link link-hover">memes</a>
  </div> 
  <div>
    <span className="footer-title">Condiciones</span> 
    <a href="a" className="link link-hover">Terminos de uso</a> 
    <a href="a" className="link link-hover">Politica de Privacidad</a> 
    <a href="a" className="link link-hover">Policia en descubiertos</a>
  </div>
</footer>

</body>
    )
}

export default Peepoapp;