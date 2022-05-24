import React from "react";


function Filtros({ list }){
    return(

<div className="pa-eso">
  <select className="select select-bordered select-sm w-28 max-w-xs m-1">
    {list.map((element) => {
    return <option>{element}</option>;
    })}
  </select>
</div>
    );
}

export default Filtros;