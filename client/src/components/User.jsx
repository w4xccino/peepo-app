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
    <div>
      <Navbar />

      <div className="w-full min-h-screen bg-base-100 p-6 ">
        {/*Logo*/}
        <div className="flex justify-center">
          <div className="avatar online">
            <div className="w-48 rounded-full">
              <img src={require("../imagenes/avatar2.png")} alt="" />
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
                <th>id</th>
                <th>Email</th>
                <th>Tipo Producto</th>
                <th>Modelo</th>
                <th>Precio</th>
                <th>Fecha</th>
              </tr>
            </thead>
            <tbody>
              {table.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.email}</td>
                    <td>{item.nombre_tipo__producto}</td>
                    <td>{item.modelo}</td>
                    <td>S/ {item.precio}</td>
                    <td>{item.fecha.slice(0, 10)}</td>
                  </tr>
                );
              })}
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
