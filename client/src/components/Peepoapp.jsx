import React from 'react'
import CardProduct from './templates/card-product';
import Footer from './templates/footer';
import Navbar from './templates/Navbar.jsx';

function Peepoapp(props) {
    return (
<body>
    {/* Barra de Navegacion dentro del body */}
<Navbar/>
    {/* Contenedor principal de la pagina */}
<div className="w-full min-h-screen bg-blue-50 p-6">
     <h1 className="font-bold text-xl text-center md:text-3xl md:mt-12 mb-4">Categorias-Estado-Precio-Descuentos </h1>
  <div className="flex flex-wrap justify-center space-y-3 space-x-3 bg-white">   {/* Color del contenedor responsive */}

{/* Integracion de los cards productos con sus props */}
<CardProduct
precio='900'
producto='RTX 3090'
imagen='rtx'
/>

<CardProduct
precio='23440'
producto='Huawei P30'
imagen='p30'
/>

<CardProduct
precio='680'
producto='wofer'
imagen='wofer'
/>

<CardProduct
precio='200'
producto='Zapatillas'
imagen='jordan'
/>

<CardProduct
precio='40'
producto='DVD'
imagen='dvd'
/>

<CardProduct
precio='60000'
producto='NFT Romario'
imagen='avatar'
/>

<CardProduct
precio='120'
producto='Huawei p40'
imagen='p302'
/>

<CardProduct
precio='8000'
producto='Github'
imagen='Git'
/>
  </div>
</div>

{/* Area del componente footer*/}
<Footer />

</body>
    )
}

export default Peepoapp;