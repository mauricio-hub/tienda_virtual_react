import React from 'react'
import  {Link} from 'react-router-dom';
export const ProductCard = ({
	id,
    marca,
    nombre, 
    genero, 
    descripcion,
    tallas,
    Precio
}) => {
	return (

		<div className="container " style= {{maxWidth:540}}>
			<div className="card sm-3" style= {{maxWidth:540}}>
				<div className ="row no-gutters">
					<div className="col-md-4">
					<img src={`./assets/data_img/${id}.png`} className="card-img"  alt={nombre}/>
					</div>
						<div  className="col-md-8" >
							<div className="card-body">
								<h5 className="card-title">{nombre}</h5>
								<p className="card-text">{marca}</p>
								<p className="card-text">{descripcion}</p>
								<p className="card-text">{Precio}</p>
								<Link className="card-link" to={`./producto/${id}`}>Comprar</Link>
    							
							</div>
								
						</div>
				</div>
					
			</div>
		</div>
		
	)
}

