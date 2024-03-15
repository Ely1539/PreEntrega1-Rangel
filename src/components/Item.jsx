import { Link } from "react-router-dom"

const Item = ({ product }) => {
  return (
    <div className="itemContainerHome">
      <Link to={`/product/${product.id}`} >
        <img className="imgHome" src={`${product.img}`} alt={`Imagen de ${product.title}`} />
        <div className="card">
          <h2 className="H2Title">{product.title} {product.description}</h2>
          <p className="Size">Tamaño: {product.size}</p>
          <span className="price">Precio ${product.price}</span>
        </div>
        <div className="btnCart">
          <button className="btn">Ver Producto</button>
        </div>
      </Link>
    </div>
  );
}

export default Item;
