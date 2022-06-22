import Item from "../item/item";
import React from "react";

const ItemList = ({data = []}) =>{
    return(
       data.map(Motos => <Item key={Motos.id} info={Motos} />)
    );
}

export default ItemList;