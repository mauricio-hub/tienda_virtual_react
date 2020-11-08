import React,{useMemo} from 'react'
import {getProductoByGenero} from '../../selectors/getProductoByGenero'
import {ProductCard} from './ProductCard'
export const ProductsList = ({genero}) => {
		const productos = useMemo(() =>getProductoByGenero(genero),[genero])
	
	//const productos = getProductoByGenero(genero);

	return (
		<div className="card-columns animate__animated animate__fadeIn">
			{
				productos.map(producto=>(
					<ProductCard 
					key={producto.id}
						{...producto}/>
				

					))
			}
		</div>
	)
}

