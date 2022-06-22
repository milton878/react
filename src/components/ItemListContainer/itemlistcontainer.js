import ItemCount from "../ItemCount/itemcount";
import React from "react";
import Title from "../Title";
import ItemList from "../ItemList/itemlist";
import { useEffect, useState } from "react";

const Motos = [
    {id: 1, Image: "https://pixabay.com/images/id-30990/", title:"Honda Tor"},
    {id: 2, Image:"https://images.app.goo.gl/wvuESGY9PRCw1zjA7", title:"Yamaha xtz"},
    {id: 3, Image:"https://images.app.goo.gl/fcdKyHP1NWd5MaZf8", title:"Suzuky rm"},
];

export const ItemListContainer = ({texto}) =>{
    const [data, setData] = useState([]);

    useEffect(() =>{
        const getData = new Promise(resolve => {
            setTimeout(() =>{
                resolve(Motos)
            }, 2000);
        });
        getData.then(res => setData(res));

    }, [])

    const onAdd = (quantity) =>{
        console.log(`Compraste ${quantity} unidades`)
    }
    return(
         <>
       <Title greeting={texto} />
        
        <ItemCount initial={1} stock={10} onAdd={onAdd}/>
        
        <ItemList data={data} />
        </>
    );
}
export default ItemListContainer;