import React,{useMemo} from 'react'
import {useParams,Redirect} from 'react-router-dom';
import {getProductoById} from '../../selectors/getProductoById';
export const ProductScreen = ({history})=>{

	const {productId} = useParams();	
	//console.log(params)
	const producto = useMemo(() =>getProductoById(productId),[productId])
	//const producto = getProductoById(productId);

	if(!producto){
		//si la url no existe resirecciona a home
		return <Redirect to='/'/>
	}

	const {

    marca,
    nombre, 
    genero, 
    descripcion,
    tallas,
    Precio
} =producto;

	//console.log(producto)

	const handleReturn =()=>{
		if(history.length<=2){
			history.push('/')
		}else{
				history.goBack();
		}
	
	}

	return(

			<div className ="row mt-5">
				<div className="col-4">
					<img src=
					{`../assets/data_img/${productId}.png`}
					className="img-thumbnail animate__animated animate__fadeInLeft"	
					 alt={nombre}

					 />
					
				</div>

				<div className="col-8">
					<h3>{nombre}</h3>
					<ul className= "list-group list-group-flush">
						<li className="list-group-item"><b>Producto: </b>{nombre}</li>
						<li className="list-group-item"><b>Marca: </b>{marca}</li>
						<li className="list-group-item"><b>Descripcion: </b>{descripcion}</li>
						<li className="list-group-item"><b>Talla disponibles: </b>{tallas}</li>
						<li className="list-group-item"><b>Precio: </b>{Precio}</li>
					</ul>
					<hr/>
					<button className="btn btn-outline-info"
					onClick={handleReturn}
					>
					Regresar
					</button>

				</div>
			</div>

		)

}
