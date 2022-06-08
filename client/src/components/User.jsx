import React, { useEffect, useState } from "react";
import Footer from "./templates/footer";
import Navbar from "./templates/Navbar.jsx";
import axios from "axios";

function User() {
  let [table, setTable] = useState([]);
  useEffect(() => {
    let email = localStorage.getItem("email");
    axios
      .post("http://localhost:4000/api/historial", { email })
      .then((response) => setTable(response.data));
  }, []);
  return (
    <div className="w-full min-h-screen bg-base-100">
      <Navbar />
        {/*Logo*/}
        <div className="">
          <div className="flex justify-center">
            <div className="avatar online w-64">
              <img src={require("../imagenes/avatar2.png")}
               alt="foto_perfil"/>
              </div>
          </div>
        </div>
        {/*Nombre de usuario*/}
        <div className="flex justify-center">
          <h2 className="text-2xl font-bold text-yellow-400">
            {localStorage.getItem("nombre")}
          </h2>
        </div>
        {/*Informacion de Usuario*/}
        <div className="flex justify-center">
          <div className="w-auto h-auto">
            <h1 className="text-xl font-bold"> Información del usuario </h1>
            <br></br>
            <div className="flex space-x-2">
              <h2 className="font-bold"> Email: </h2>
              <p>{localStorage.getItem("email")}</p>
            </div>       
            <div className="flex space-x-2">
              <h2 className="font-bold"> Dirección: </h2>
              <p>{localStorage.getItem("direccion")}</p>
            </div>
            <div className="flex space-x-2">
              <h2 className="font-bold"> Telefono: </h2>
              <p>{localStorage.getItem("telefono")}</p>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <div className="flex justify-center">
        <h1 className="text-2xl font-bold text-lime-500"> Historial de Pedidos </h1>
        </div>
        <br></br>
        {/*Tabla de historial de pedidos*/}
        <div className="overflow-x-auto p-2">
          <table className="table w-full ">
            <thead>
              <tr>
                <th className="bg-violet-800">id</th>
                <th className="bg-violet-800">Email</th>
                <th className="bg-violet-800">Pedido</th>
                <th className="bg-violet-800">Precio</th>
                <th className="bg-violet-800">Fecha</th>
              </tr>
            </thead>
            <tbody>
              {table.map((item, index) => {
                return (
                  <tr key={index} className="bg-violet-800">
                    <td>{index + 1}</td>
                    <td>{item.email}</td>
                    <td>{item.modelo}</td>
                    <td>S/ {item.precio}</td>
                    <td>{item.fecha.slice(0, 10)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      <Footer />
    </div>
  );
}
export default User;
