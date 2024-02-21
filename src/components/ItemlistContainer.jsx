import React ,{ useState, useEffect } from "react";
import {useParams } from "react-router-dom";
import  ItemList  from "./ItemList";

  const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const { iid } =useParams()

    useEffect(() => {
        fetch('../data/productos.json')
            .then(response => response.json())
            .then(produ => {
                if(iid){
                 const filterProducts = produ.filter(prod=>prod.category==iid)
                 setProducts(filterProducts)
                }else{
                   setProducts(produ)  
                }
               
            })
            .catch((error) => console.log(error))
    }, [iid])
    return (
        <div>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer