import React from "react";

let d = new Date();
let hoy = d.getDate()+ '/' + (d.getMonth() + 1)+ '/' + d.getFullYear();

let estiloFecha = {
  color: 'tomato',
  background: '#efefef',
  padding: '20px',
  margin: '0'
}

export default class Fecha extends React.Component{
  render(){
    return(
    <section>
      <span className='estiloSpan'>Los componenstes debes siempre estar envueltos en alguna etiqueta<br/>
      los estilos no funcionan si estan en una variable, la variable no funciona como clase<br/>
      la variable funciona como estilos en línea</span>
       <h2 style={{...estiloFecha, letterSpacing:"2px"}} className="fecha">Hoy es {hoy}</h2>
    </section>
    );
  }
}
