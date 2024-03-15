import React, { useRef } from 'react';
import { useCarritoContext } from "../context/cartContext.jsx";
import { Link, useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStore } from '@fortawesome/free-solid-svg-icons'
import { createOrdenCompra, getOrdenCompra, getProduct, updateProduct, } from "../firebase/firebase.js"
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

export const Checkout = () => {
    const formRef = useRef()
    const navigate = useNavigate()
    const { carrito, totalPrice, emptyCar } = useCarritoContext()
    const handleSubmit = (e) => {
        e.preventDefault()
        const datForm = new FormData(formRef.current)
        const cliente = Object.fromEntries(datForm)
        const aux = [...carrito]
        aux.forEach(prodCarrito => {
            getProduct(prodCarrito.id).then(prodBDD => {
                if (prodBDD.stock >= prodCarrito.quantity) {
                    prodBDD.stock -= prodCarrito.quantity
                    updateProduct(prodBDD.id, prodBDD)
                } else {
                    toast.info(`El producto con el nombre ${prod.title} Producto Sin Stock`, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark"
                    })
                    aux.filter(prod => prod.id != prodBDD.id)
                }
            })
        })
        const auxB = aux.map(prod => ({ id: prod.id, quantity: prod.quantity, price: prod.price }))

        createOrdenCompra(cliente, totalPrice(), auxB, new Date().toLocaleDateString('es-AR', { timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone }))
            .then(ordenCompra => {
                Swal.fire({
                    title: '¡FELICIDADES POR TU COMPRA!',
                    html: `
                            <h7>¡Gracias por Preferirnos!</h7>
                            <h7>Tu Número de Compra Es:${ordenCompra.id}</h7>
                            <h7>Por un Total de $${totalPrice()}</h7>
                            <h7>Prepárate para recibir tu pedido</h7>
                            <h7>¡Disfruta Tu Compra!</h7>
                    `,
                    icon: 'success',
                    timer: 6500,
                    backdrop: 'black',
                    showConfirmButton: false
                });
                emptyCar()
                e.target.reset()
                navigate('/')
            })
            .catch(e => {
                toast.error(`Error al generar orden de compra: ${e}`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark"
                })
            })
    }

    return (
        <>
            {carrito.length === 0 ?
                <>
                    <h2 className='ShopCart'>Agregar Productos al Carrito Para Finalizar Compra</h2>
                    <Link to={"/"}>
                        <button className="btnClose">
                            Volver al inicio
                        </button>
                    </Link>
                </>
                :
                <>
                    <div className='Checkout '>
                        <form action="" ref={formRef} onSubmit={handleSubmit}>
                            <div className='icon'>
                                <FontAwesomeIcon icon={faStore} />
                            </div>
                            <h4>Formulario de compra</h4>
                            <label >Nombre:</label>
                            <input type="text" id="nombre" name="nombre" />
                            <label>Apellido:</label>
                            <input type="text" id="apellido" name="apellido" />
                            <label >DNI:</label>
                            <input type="text" id="dni" name="dni" />
                            <label >Dirección:</label>
                            <input type="text" id="direccion" name="direccion" />
                            <label>Código Postal:</label>
                            <input type="text" id="codigoPostal" name="codigoPostal" />
                            <label >Teléfono:</label>
                            <input type="tel" id="telefono" name="telefono" />
                            <label >Email:</label>
                            <input type="email" id="email" name="email" />
                            <button type="submit">Finalizar Compra</button>
                        </form>
                    </div>
                </>
            }
        </>
    )
}

export default Checkout;
