import React from 'react';
import { useCarritoContext } from "../context/cartContext";
import { useCounter } from '../hooks/useCounter.jsx';
import { toast } from 'react-toastify';

const ItemCart = ({ product }) => {
    const { removeItem, updateItem } = useCarritoContext();
    const { count, increment, decrement } = useCounter(product.quantity, product.stock, 1);

    const handleRemoveItem = () => {
        removeItem(product.id);
        toast.error(`Producto eliminado del carrito: ${product.title}`, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark"
        });
    };

    return (
        <>
            <button className="deleteB" onClick={handleRemoveItem}>Eliminar Este Producto</button>
            <div className='Title'>
                <img src={product.img} alt={`imagen de ${product.title}`} className='imgCart' />
                <h3 className='cartTitle'>{product.title} {product.size}</h3>
            </div>
            <div className='operationBox'>
                <button className='operationCartB' onClick={() => {
                    updateItem(product.id, count - 1);
                    decrement();
                }}>-</button>
                <span className='countCart'>{count}</span>
                <button className='operationCartA' onClick={() => {
                    updateItem(product.id, count + 1);
                    increment();
                }}>+</button>
                <p className='Sub'>Subtotal: ${product.price * count}</p>
                Cantidad: {product.quantity}
            </div>
        </>
    );
};

export default ItemCart;


