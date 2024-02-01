import ContadorCarrito from "./CartWidget"
import CuidadoExteriores from "./CuidadoExteriores"
import CuidadoInterior from "./CuidadoInterior"
import Insumos from "./Insumos"
import Logo from '../assets/logo.jpeg';


const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit" color="white">Productos</button>
          </form>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <div className="categorias">
                <li className="nav-item">
                  <CuidadoExteriores />
                </li>
                <li className="nav-item">
                  <CuidadoInterior />
                </li>
                <li className="nav-item dropdown">
                  <Insumos />
                </li>
              </div>
            </ul>
            <ContadorCarrito />
          </div>
        </div>
      </nav>
      <div className="logo">
        <img className="imgLogo" src={Logo} alt="" />
      </div>
    </>
  )
}


export default Navbar
