import ItemCount from "../ItemCount/itemcount";
import React from "react";
import Title from "../Title";

export const ItemListContainer = ({texto}) =>{
    const onAdd = (quantity) =>{
        console.log(`Compraste ${quantity} unidades`)
    }
    return(
         <>
       <Title greeting={texto} />
        
        <ItemCount initial={1} stock={10} onAdd={onAdd}/>
        </>
    );
}
export default ItemListContainer;