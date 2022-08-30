import React from 'react'
import {createContext,  useState, useContext,} from 'react'

 const CartContext = createContext([]) //Creating context
 export const useCartContext = () => useContext ( CartContext )


export const CartContextProvider = ({children})=> {
    //aca  puedo declarar todos los estados y funciones globales
   
    const [cartList, setCartList] = useState([])
    
    const agregarCarrito =(prod)=>{  // Add to cart function (recieves the product as a parameter)
        // Checking for duplicates
        const idx = cartList.findIndex (producto => producto.id === prod.id)//finding the index of the product that is already on the arra
        if (idx !== -1) {     // Checking if that index already exists
            let cant = cartList[idx].cantidad
            cartList[idx].cantidad = cant + prod.cantidad
            setCartList( [ ...cartList ] )   // Setting the cart array that was just modified
        } 
        else {
            setCartList([  // Setting the cart list by using spread operator to add to the existing products in the cart.
                ...cartList, prod
            ])
        }
    }


    const vaciarCarrito = () => { //Function that empties the cart list by setting it as an empty array
        setCartList([])
    }

    // Funciona para calcular el precio total
    const precioTotal = ()=>{
        return cartList.reduce( (acumPrecio, prodObj) => acumPrecio = acumPrecio + (prodObj.price * prodObj.cantidad) , 0) // <- precioTotal
    }

    const cantidadTotal = ()=>{
        return cartList.reduce((contador, produObject) => contador += produObject.cantidad , 0) 
    }

    const eliminarProducto = (id) => {

        setCartList( cartList.filter(prod => prod.id !== id ) )
    }

//Returning all variables and functions that will be used by the consumers

    return(
        <CartContext.Provider value={{
            cartList,
            agregarCarrito,
            vaciarCarrito,
            precioTotal,
            cantidadTotal,
            eliminarProducto

        }}>
            {children}

        </CartContext.Provider>

    )
}
export default CartContextProvider