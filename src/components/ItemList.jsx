import  Item  from "./Item"
    const ItemList = ({ products }) => {
    return (
        <>
        <div className="gridContainer">

  {products.map(prod => <Item product={prod} />)}

        </div>
          
        </>

    )
}

export default ItemList