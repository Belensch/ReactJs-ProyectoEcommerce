let productos=[
  {id: "1", categoria: "libros", name: "The Lord of the rings", price: 5000, foto: "../..src/img/bookLordOfRings.JPG"},
  {id: "2", categoria: "libros", name: "The Hobbit", price: 5000, foto: "data: "},
  {id: "3", categoria: "libros", name: "Silmarrillion", price: 5000, foto: "data: "},
  {id: "4", categoria: "toy", name: "Funko Pop!: Sauron ", price: 5000, foto: "data: "},
  {id: "5", categoria: "toy", name: "Funko Pop!: Gollum", price: 5000, foto: "data: "}
]
  
  export const getFetch = ()=> {
    return new Promise ((resolve, reject)=> {
      setTimeout(()=> {
        resolve (productos)
      }, 2000)
    })
  }