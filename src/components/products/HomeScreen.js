import React from 'react'
import {ProductsList} from '../products/ProductsList.js'
export const HomeScreen = () => {
	return (
		<div>
			 <h1>HomeScreen</h1>
			 	<ProductsList genero='hombre'/>
			 		<ProductsList genero='mujer'/>
		</div>
	)
}

