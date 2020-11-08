import {productos} from '../data/productos'

export const getProductoById = (id) =>{
	const validGenero = ['hombre','mujer']

return productos.find(producto => producto.id === id)


}