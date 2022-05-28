import "../styles/PageNotFound.css";
import NavBar from "./templates/Navbar";
function PageNotFound() {
  return (
    <div>
      <NavBar />
      <div className="pag">
        <section className="notFound">
          <div className="img">
            <img
              src="https://assets.codepen.io/5647096/backToTheHomepage.png"
              alt="Back to the Homepage"
            />
            <img
              src="https://assets.codepen.io/5647096/Delorean.png"
              alt="El Delorean, El Doc y Marti McFly"
            />
          </div>
          <div className="text">
            <h1>404</h1>
            <h2>PAGINA NO ENCONTRADA</h2>
            <h3>VOLVER A LA PAGINA?</h3>
            <a href="/" className="yes">
              YES
            </a>
            <a href="https://www.youtube.com/watch?v=G3AfIvJBcGo">NO</a>
          </div>
        </section>
      </div>
    </div>
  );
}
export default PageNotFound;
