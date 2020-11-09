import React from 'react'
import {ProductsList} from '../products/ProductsList.js'

export const HomeScreen = () => {
	return (
		<div>
 <h1>Simple Ecommerce React app</h1>


 <section className="bgimage">
  <div className="container-fluid">
    <div className="row">
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <h5>Bienvenidos</h5>
        <p>Descuentos válidos de acuerdo a la vigencia de cada cupón o hasta agotar unidades disponibles para redención con ofertas.</p>
        
      </div>
    </div>
  </div>
</section>


			<div className="container ">
			<h1>Ropa de Caballeros</h1>
			 	<ProductsList genero='hombre'/>
			 	<h1>Ropa de Damas</h1>
			 		<ProductsList genero='mujer'/>
			</div>
			
			
		</div>
	)
}

