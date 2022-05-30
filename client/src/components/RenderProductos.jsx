import React, { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import CardProduct from "./templates/card-product";
function RenderProductos({ number }) {
  const cookies = new Cookies();
  const [producto, setProduct] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/api/productos")
      .then((response) => response.json())
      .then((json) => setProduct(json));
  }, []);

  let categoriaSelected = cookies.get("category-selected");

  return (
    <div>
      <div className="w-full min-h-screen p-6">
        <div className="flex flex-wrap justify-center ">
          {producto.map((item, index) => {
            return (
              <div key={index}>
                {console.log(categoriaSelected)}
                {number == item.categoriumId && (
                  <CardProduct
                    precio={item.precio}
                    producto={item.descripcion}
                    imagen={item.imagen}
                    link={`/productos/${item.id}`}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default RenderProductos;
