import React, { useState } from "react";
import {MdShoppingCart} from 'react-icons/md';
import './CartWidget.scss'

export const CartWidget = ({cantidad}) => {
    
    const [cantidadElementos, setCantidadElementos] =useState({
        cantidad: cantidad,
        activo: true, 
    })

    return(
        <div className='cartwidget'>
        <MdShoppingCart />
        <span>{cantidadElementos.cantidad}</span>
        </div>
    )

}