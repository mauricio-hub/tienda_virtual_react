import {productos} from '../data/productos'


export const getProductByName = (tipo)=>{

	if(tipo===''){
		return[];
	}

	tipo = tipo.toLocaleLowerCase();
	return productos.filter(producto =>producto.tipo.toLocaleLowerCase().includes(tipo))
}
