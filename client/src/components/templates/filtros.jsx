import React from "react";


function Filtros(props){
    return(

<div className="pa-eso">
  <select className="select select-bordered select-sm w-28 max-w-xs m-1">
  <option>{props.primero}</option>
  <option>{props.segundo}</option>
  <option>{props.tercero}</option>
  <option>{props.cuarto}</option>
  </select>
</div>
    );
}

export default Filtros;