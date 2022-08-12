import Titulo from "../Titulo/Titulo"


const Formulario = ( { saludarFunction } ) => {
   
    return (
        <div style={{border: '1px solid black'}}>
            <Titulo titulo='Titulo de Form' subTitulo= 'Subtitulo de Form' />
            <form>
                <input type="text" placeholder="Ingrese su nombre" />
                <button onClick={saludarFunction}>Click</button>
            </form>
        </div>
    )
}

export default Formulario
