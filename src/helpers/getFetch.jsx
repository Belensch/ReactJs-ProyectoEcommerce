let productos=[
  {id: "1", categoria: "libros", name: "The Lord of the rings", price: 5000, foto: "src/img/bookLordOfRings.JPG"},
  {id: "2", categoria: "libros", name: "The Hobbit", price: 5000, foto: "src/img/bookLordOfRings.JPG"},
  {id: "3", categoria: "libros", name: "Silmarrillion", foto: "src/img/bookLordOfRings.JPG"},
  {id: "4", categoria: "toy", name: "Funko Pop!: Sauron ", price: 5000, foto: "src/img/funkpPopSauron.JPG"},
  {id: "5", categoria: "toy", name: "Funko Pop!: Gollum", price: 5000, foto: "src/img/funkpPopSauron.JPG"}
]
  
  export const getFetch = (id)=> {
    return new Promise ((resolve, reject)=> {
      setTimeout(()=> {
        if (id){
          resolve(productos.find(producto=> producto.id==id))
        } else{
            resolve(productos)
          }
        }, 2000)
    })
  }