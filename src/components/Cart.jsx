import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCarritoContext } from "../context/cartContext";
import ItemList from "./ItemList";
import Swal from 'sweetalert2';

const Cart = () => {
    const { carrito, totalPrice, emptyCar } = useCarritoContext();
    const mostrarAlerta = () => {
        Swal.fire({
            title: 'Carrito Vacío',
            text: '¡Tu Carrito De Compras Está Vacío!',
            icon: 'error',
            timer: 2500,
            backdrop: `rgba(11, 0, 19, 0.8)`,
            showConfirmButton: false,
        });
    };
    useEffect(() => {
        if (carrito.length === 0) {
            mostrarAlerta();
        }
    }, [carrito]);
    return (
        <>
            {carrito.length === 0 ? (
                <div className='empCart'>
                    <Link to={'/'} className='link'>
                        <h1>Carrito Vacío</h1>
                        <button className="Trash">
                            Volver Al Inicio
                        </button>
                    </Link>
                </div>
            ) : (
                <div className="detailCartContainer">
                    <ItemList products={carrito} plantilla="ItemCart" />
                    <div className="infoCart">
                        <p className='resumeShop'>Resumen De La Compra: ${totalPrice()}</p>
                        <div className='shopButtons'>
                            <button className="Trash" onClick={emptyCar}>
                                Vaciar Carrito
                            </button>
                            <Link to={'/'} className="buyOn">
                                <button className="bCr">Continuar Comprando</button>
                            </Link>
                            <Link to={'/checkout'} className="endShop">
                                <button className="bCr">Finalizar Compra</button>
                            </Link>
                        </div>
                        <div className='cartel'>
                            <h4 className='promo'>Envío Gratis con la Compra de 3 Artículos o Más</h4>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Cart;


