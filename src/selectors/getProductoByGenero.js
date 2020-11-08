import {productos} from '../data/productos'

export const getProductoByGenero = (genero) =>{
	const validGenero = ['hombre','mujer']

	if(!validGenero.includes(genero)){
		throw new Error(`el argumento  "${genero}"no es valido`);


	}

	return productos.filter(producto => producto.genero === genero)


}