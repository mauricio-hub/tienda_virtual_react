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
								<p className="card-title"><strong>Tipo:</strong> {nombre}</p>
								<p className="card-text"><strong>Marca:</strong> {marca}</p>
								<p className="card-text"><strong>Descripcion:</strong> {descripcion}</p>
								<p className="card-text"><strong>Precio:</strong>{Precio}</p>
								<Link className="card-link" to={`./producto/${id}`}>Comprar</Link>
    							
							</div>
								
						</div>
				</div>
					
			</div>
		</div>
		
	)
}

