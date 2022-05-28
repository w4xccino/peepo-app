import React, { useState } from "react";

function Filtros({ list }) {
  const [selected, setSelected] = useState(0);
  const ordenar = () => {
    let selectBox = document.getElementById("form-select");
    let selectedValue = selectBox.options[selectBox.selectedIndex].index;
    setSelected(selectedValue + 1);
  };
  console.log(selected);
  return (
    <div className="pa-eso">
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
  );
}

export default Filtros;
