import React, { useEffect, useState } from "react";
import Footer from "./templates/footer";
import Navbar from "./templates/Navbar.jsx";

function User(props) {
  //Consumiendo la api
  /*  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch('http://localhost:4000/api/user')
      .then(response => response.json())
      .then(json => console.log(json))
  },[])
*/
  /*
{
  users.map((user, idx) => {
      return(

      )
    })
}
*/

  // const [users, setUsers] = useState([])
  // useEffect(() => {
  //   fetch('http://localhost:4000/api/user')
  //     .then(response => response.json())
  //     .then(json => setUsers(json))
  // },[])

  return (
    <div>
      <Navbar />

      <div className="w-full min-h-screen bg-base-100 p-6 ">
        {/*Logo*/}
        <div className="flex justify-center">
          <div className="avatar online">
            <div className="w-48 rounded-full">
              <img src={require("../imagenes/avatar.png")} alt="" />
            </div>
          </div>
        </div>
        {/*Nombre de usuario*/}
        <div className="flex justify-center">
          <h2 className="card-title text-yellow-500">
            {localStorage.getItem("nombre")}
          </h2>
        </div>
        <div className="flex justify-center">
          <p>{}</p>
        </div>
        <br></br>
        <br></br>
        {/*Informacion de Usuario*/}
        <div className="flex justify-self-start">
          <div className="w-64 h-auto">
            <h1 className="font-bold"> Información de usuario </h1>
            <br></br>
            <div className="flex space-x-2">
              <h2 className="font-bold"> Email: </h2>
              <p>{localStorage.getItem("email")}</p>
            </div>
            <br></br>
            <div className="flex space-x-2">
              <h2 className="font-bold"> Dirección: </h2>
              <p>{localStorage.getItem("direccion")}</p>
            </div>
            <br></br>
            <div className="flex space-x-2">
              <h2 className="font-bold"> Telefono: </h2>
              <p>{localStorage.getItem("telefono")}</p>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <h1 className="card-title"> Historial de Pedidos </h1>
        <br></br>
        {/*Tabla de historial de pedidos*/}
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Nombre</th>
                <th>Pedido</th>
                <th>Fecha</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <td>Romario</td>
                <td>RTX 3090</td>
                <td>Blue</td>
              </tr>
              <tr>
                <th>2</th>
                <td>Eva Sofia</td>
                <td>Huawei p30</td>
                <td>20/05/2022</td>
              </tr>
              <tr>
                <th>3</th>
                <td>Diego</td>
                <td>Ceviche</td>
                <td>12/05/2022</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/*Footer*/}
      <Footer />
    </div>
  );
}
export default User;
