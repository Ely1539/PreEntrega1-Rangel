import CarWidget from "./CartWidget"
import Categories from "./Categories"
import 'animate.css'
const Navbar = () => {
  return (
    <>
      <img src="https://firebasestorage.googleapis.com/v0/b/react-2024-a7a2a.appspot.com/o/logo.jpeg?alt=media&token=60518df4-9d89-450e-a561-90f46ed66165" alt="RsDetailing" className="imgLogo" />
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
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

export default Navbar;
