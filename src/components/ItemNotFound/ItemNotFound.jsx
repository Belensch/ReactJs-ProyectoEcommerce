import { Card } from "react-bootstrap"
import CardHeader from "react-bootstrap/esm/CardHeader"
import { Link } from "react-router-dom"


const ItemNotFound = () => {
    return ( //This is a component that is shown when the item id in the url doesnt match any on the database
        <>
       
        <Card className="text-center mx-auto" style={{ width: '30rem' }}>
            <CardHeader>Ups!</CardHeader>
             Producto Inexistente. Revisa la direccion de URL
             
             {/* Button for going back to 'home' */}
            <button className="btn btn-sm mx-auto" style={{ borderRadius:"12px", backgroundColor: "#FF9F50", color:"black" ,margin:"5px", outlineColor:"black", maxWidth:'100px' }}>
                <Link style={{  color: "white" }} to="/">Volver</Link> 
            </button>
        </Card>
        </>
    )
}

export default ItemNotFound