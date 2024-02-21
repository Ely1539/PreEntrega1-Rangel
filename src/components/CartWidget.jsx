import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"

const CartWidget = () => {
    return (
        <li className="">
            <button className="cart">
                <FontAwesomeIcon icon={faShoppingCart} className="cartUno" />
                <span>0</span>
            </button>
        </li>

    )
}
export default CartWidget

