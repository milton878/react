import './itemcount.css';
import React, { useEffect, useState } from 'react';
import CartWidget from '../CartWidget/cartwidget';

export const ItemCount = ({initial, stock, onAdd}) =>{
    const[count, setCount] = useState(parseInt(initial));
    //FUNCIONES PARA INCREMENTAR Y DECREMENTAR
    const decrease = () => {
        setCount(count - 1);
    }

     const increase = () => {
        setCount(count + 1);
    }
    useEffect(() =>{
        setCount(parseInt(initial));
    }, [initial])
    
    return(
        <div className='counter'>
             <h1>Contador</h1>
             <h2>{count}</h2>
            <button disabled={count <= 1} onClick={decrease}>-</button>
            
           
            <button disabled={count >= stock} onClick={increase}>+</button>
            <div>
                <button  disabled={stock <= 0} onClick={() =>onAdd(count)} className='btn-carrito'>Agregar al Carrito</button>
            </div>
        </div>

    );
}
export default ItemCount;