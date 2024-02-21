import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'
import ItemDetail from "./ItemDetail"


 const ItemDetailsContainer = () => {
    const [item,setItem]= useState([])
    const {pid}= useParams()

    useEffect(()=>{
        fetch('../data/productos.json')
        .then(response=> response.json())
        .then(products =>{
            const prod = products.find(producto=> producto.id == pid)
            if(prod)
            setItem(prod)
        })
    },[])
    return (
        <div>
        <ItemDetail item={item} />
    </div>
    );
}

export default ItemDetailsContainer;
