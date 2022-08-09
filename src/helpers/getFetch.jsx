let productos = [
  {id: "1", categoria: "libros", name: "The Lord of the rings", price: 5000, foto: "https://images-na.ssl-images-amazon.com/images/I/41qO5Lg0KXL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg"},
  {id: "2", categoria: "libros", name: "The Hobbit", price: 5000, foto: "https://cupertinohslibrary.files.wordpress.com/2014/12/hobbit-anniversary-collection-1.jpg"},
  {id: "3", categoria: "libros", name: "Silmarrillion", price: 7000,foto: "https://m.media-amazon.com/images/I/810DRhUweEL._AC_SX679_.jpg"},
  {id: "4", categoria: "figuras", name: "Funko Pop!: Frodo ", price: 5000, foto: "https://m.media-amazon.com/images/I/61Od4zcvIcL._AC_SX522_.jpg"},
  {id: "5", categoria: "figuras", name: "Funko Pop!: Legolas ", price: 6000, foto: "https://m.media-amazon.com/images/I/61gFCITXT+L._AC_SX569_.jpg"},
  {id: "6", categoria: "figuras", name: "Funko Pop!: Rey Brujo", price: 8000, foto: "https://m.media-amazon.com/images/I/81xYifDmMKL._AC_SX569_.jpg"}
]
  
  export const getFetch = (id)=> {
    
      return new Promise (( resolve, reject)=> {
        setTimeout (()=>{
          if (id) {
          resolve(productos.find(producto=> producto.id ===id))
        } else {
       resolve(productos)
          } 
        }, 1000)
      })
    }