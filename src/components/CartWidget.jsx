import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCarritoContext } from "../context/cartContext.jsx";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const CartWidget = () => {
    const { getItemQuantity } = useCarritoContext();
    return (
        <Link to={'/cart'}>
            <button className="cartContainer">
                <FontAwesomeIcon icon={faShoppingCart} className="cart" />
                <div className="cartCount">{getItemQuantity()}</div>
            </button>
        </Link>
    );
};

export default CartWidget;

