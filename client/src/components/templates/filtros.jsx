import React, { useState } from "react";
import RenderProductos from "../RenderProductos";

function Filtros({ list }) {
  const [selected, setSelected] = useState(1);
  const ordenar = () => {
    let selectBox = document.getElementById("form-select");
    let selectedValue = selectBox.options[selectBox.selectedIndex].index;
    selectedValue = selectedValue + 1;
    setSelected(selectedValue);
    console.log(selectedValue);
  };

  return (
    <div>
      <div className="containera">
        <select
          id="form-select"
          onChange={ordenar}
          className="select select-bordered select-sm w-32 max-w-xs m-2"
        >
          {list.map((element, idx) => {
            return <option key={idx}>{element}</option>;
          })}
        </select>
      </div>
      <RenderProductos number={selected} />
    </div>
  );
}

export default Filtros;
