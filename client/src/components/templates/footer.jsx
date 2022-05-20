import React from "react"

function Footer(props){
    return(

<footer className="footer p-10 bg-base-200 text-base-content">
  <div>
     {/* ENLACE DEL REPOSITORIO*/}                      
  <a href='https://github.com/w4xccino/peepo-app'><img src={require('../../imagenes/github.png')} alt="Shoes" width="50" height="50"  /></a>
    <br></br>
    <p>© 2022 Copyright Text</p>
    <p>Gracias por visitar nuestra página web.</p>
  </div> 
  <div>
    <span className="footer-title">Desarrolladores</span> 
    <a href="a" className="link link-hover">Romario</a> 
    <a href="a" className="link link-hover">Diego</a> 
    <a href="a" className="link link-hover">Ronaldo</a> 
    <a href="a" className="link link-hover">RonySama</a>  
  </div> 
  <div>
    <span className="footer-title">Compania</span> 
    <a href="a" className="link link-hover">Acerca de nosotros</a> 
    <a href="a" className="link link-hover">Contactanos</a> 
    <a href="a" className="link link-hover">Proyectos</a> 
    <a href="a" className="link link-hover">Discord Community</a>
  </div> 
  <div>
    <span className="footer-title">Condiciones</span> 
    <a href="a" className="link link-hover">Terminos de uso</a> 
    <a href="a" className="link link-hover">Politica de Privacidad</a> 
    <a href="a" className="link link-hover">Contact INTERPOL</a>
  </div>
</footer>
    )
}

export default Footer;