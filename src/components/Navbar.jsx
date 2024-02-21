import CarWidget from "./CartWidget"
import Categories from "./Categories"
import logo from "/img/logo.jpeg";
import 'animate.css'


const Navbar = () => {
  return (
    <>
      <img src={logo} alt="RsDetailing" className="imgLogo" />
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit" color="white">Productos</button>
          </form>
          <div>
            <h1 className="animate__animated animate__bounce" >RS DETAILING   </h1>
            <h3 className="animate__animated animate__bounce">ESTETICA VEHICULAR</h3>
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            </ul>
            <Categories />
          </div>
          <CarWidget />
        </div>
      </nav>
    </>
  )
}

export default Navbar
