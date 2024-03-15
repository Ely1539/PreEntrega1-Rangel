import { Link } from "react-router-dom"
import { useCounter } from "../hooks/useCounter"
import { useCarritoContext } from "../context/cartContext.jsx";
import { toast } from "react-toastify";

export const ItemDetail = ({ item }) => {
    const { addItem, removeItem } = useCarritoContext();
    const { count, increment, decrement, reset } = useCounter(1, item.stock, 1)
    const handleReset = () => {
        reset();
        removeItem(item.id);
    };
    const handleAddToCart = () => {
        addItem(item, count)
        toast.success(`Producto Agregado al Carrito`, {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark"
        })
    }
    return (
        <>
            <div className="detailContainer">
                <Link to={'/'} className="Link">
                    <button className="btnClose">Cerrar</button>
                </Link>
                <div className="detailCardContainer">
                    <img className="imgContainer" src={`${item.img}`} alt={`Imagen de ${item.title}`} />
                    <div className="cardDetail">
                        <p className="TitleP">{item.title}</p>
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
                            <button className="Reset" onClick={handleReset}>Eliminar</button>
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