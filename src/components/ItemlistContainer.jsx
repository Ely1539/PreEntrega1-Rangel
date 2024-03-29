import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { getProducts } from "../firebase/firebase.js"

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const { cid } = useParams();
    useEffect(() => {
        getProducts()
            .then(prods => {
                const productos = prods.filter(prod => prod.stock > 0)
                if (cid) {
                    const productosFiltrados = productos.filter(prod => prod.category == cid)
                    setProducts(productosFiltrados)
                } else {
                    setProducts(productos)
                }
            })
            .catch((error) => console.log(error));
    }, [cid]);
    return (
        <div className="gridContainer">
            <ItemList products={products} plantilla="Item" />
        </div>
    )
}

export default ItemListContainer;
