import React from 'react'

function User(props) {
    return(

<div class="w-full min-h-screen bg-neutral p-6">

        <div class="avatar flex justify-center">
            <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={require('../imagenes/avatar.png')} alt="" />
            </div>
        </div>

<h2 class="text-yellow-500">Romario</h2>
<p>roma_gd@gmail.com</p>

<br></br>
<br></br>

<h1 class="text-white">Información de usuario</h1>
<h1 class="text-white">Email:</h1>
<h1 class="text-white">Dirección:</h1>
<h1 class="text-white">Telefono:</h1>

<br></br>
<br></br>

    <h1 class="text-yellow-500">Historial de Pedidos</h1>
    <table class="table-fixed ">
        <thead className=''>
          <tr>
            <th>Nombre</th>
            <th>Pedido</th>
            <th>Fecha</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
            <td>Malcolm Lockyer</td>
            <td>1961</td>
          </tr>
          <tr>
            <td>Witchy Woman</td>
            <td>The Eagles</td>
            <td>1972</td>
          </tr>
          <tr>
            <td>Shining Star</td>
            <td>Earth, Wind, and Fire</td>
            <td>1975</td>
          </tr>
        </tbody>
    </table>

    </div>



    )
}

export default User;