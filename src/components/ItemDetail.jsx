import { Link } from "react-router-dom"
import { useCounter } from "../hooks/useCounter"
const ItemDetail = ({ item }) => {
    const { count, increment, decrement, reset } = useCounter(1, item.stock, 1)

    const handleAddToCart = () => {

    }
    return (
        <>
            <div className="detailContainer">
                <Link to={'/'}>
                    <button className="btnClose">Cerrar</button>
                </Link>
                <div className="DetailCardContainer">
                    <img className="imgContainer" src={`../img/${item.img}`} alt={`Imagen de ${item.title}`} />
                    <div className="cardDetail">
                        <h2 className="Title">{item.title}</h2>
                        <p className="Description">Tamaño : {item.size}</p>
                        <p className="Size">Stock: {item.stock}</p>
                        <p className="Price">Precio: ${item.price}</p>
                        <div className="CounterContainer">
                            <button className="Plus" onClick={decrement}>
                                -
                            </button>
                            <span className="Count">{count}</span>
                            <button className="Less" onClick={increment}>
                                +
                            </button>
                            <button className="Reset" onClick={reset}>
                                Reset
                            </button>
                            <div>
                                <button className="btn" onClick={handleAddToCart}>
                                    Agregar al carrito
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ItemDetail;