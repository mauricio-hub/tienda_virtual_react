import {productos} from '../data/productos'


export const getProductByName = (nombre)=>{

	if(nombre===''){
		return[];
	}

	nombre = nombre.toLocaleLowerCase();
	return productos.filter(producto =>producto.nombre.toLocaleLowerCase().includes(nombre))
}
