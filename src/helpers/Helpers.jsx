import { addDoc, collection, doc, documentId, getDoc, getDocs, getFirestore, query, writeBatch, where } from "firebase/firestore"

export const updateStock = async (cartList, vaciarCarrito)=> {

    //baseDatos en cart
    const baseDatos =getFirestore()
    
    // actualizar el stock 
    const queryCollectionStock = collection(baseDatos, 'productos')   //Is target collection
    const queryActulizarStock = query(
        queryCollectionStock, where( documentId() , 'in', cartList.map(it => it.id) )
        )
    
    
    const batch = writeBatch(baseDatos)
    await getDocs (queryActulizarStock)
    .then(resp => resp.docs. forEach (res => batch.update(res.ref,{  //Substracts the amount (cantidad) in the cart to the current stock of each producto
        stock : res.data (). stock - cartList.find(productos => productos.id === res.id).cantidad
    })))
    .catch (err => console.log (err))
    .finally(vaciarCarrito())
    batch.commit()
}


export const setOrder =(order) =>{
    const baseDatos =getFirestore()
    const queryOrders = collection(baseDatos, 'orders')

    return(addDoc(queryOrders,order)) //Returns this function which adds the order as a document in the orders collection
}

//brings from firestore the entire collection of products
export const getProductsFirestore = (categoriaId ) =>{
    const baseDatos = getFirestore()
    const queryCollection= collection(baseDatos, 'productos')

    const queryFilterStock =query(
    queryCollection,
    where ('stock','>', 0))

    const queryFilter =categoriaId ? query (
        queryFilterStock,
        where ('categoria' , '==', categoriaId)) : queryFilterStock

        return getDocs (queryFilter)
}
