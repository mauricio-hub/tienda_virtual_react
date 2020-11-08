import React , {useMemo} from 'react';
import queryString from 'query-string';
import {ProductCard} from '../products/ProductCard'
import {productos} from '../../data/productos';
import {useForm} from '../../hoocks/useForm';
import {useLocation} from 'react-router-dom';
import {getProductByName} from '../../selectors/getProductByName'
export const SearchScreen = ({history}) => {
	
	const location = useLocation()
	//se usa el query string que permite tomar
	//lo que se mande por la url y se tranfoma en un valor 
	//location.search
	const {q='' } =queryString.parse(location.search);
	
	
	const [formValues,handleInputChange]=useForm({
		searchText:q
	});

	const {searchText} = formValues;

	const productFilter = useMemo(()=>getProductByName(q),[q]);

	/*buscador renderizando cada busqueda 
	const procutFilter = getProductByName(searchText);
	*/

	const handleSearch =(e)=>{
		e.preventDefault();
		//console.log(searchText);
		history.push(`?q=${searchText}`)
	}

	return (
		<div>
			<h1>Buscar Producto</h1>
			<hr/>

			
			<div className="row">

				<div className="col-4">
					<form className="form-inline" onSubmit={handleSearch}>
 
		  			<div className="form-group mx-sm-3 mb-2">
		    		<label  className="sr-only">Buscar Producto</label>
		   			<input type="text" className="form-control" 
		   			id=""
		   			placeholder="Escribe tu porducto"
		   			autoComplete="off"
		   			name="searchText"
		   			value={searchText}
		   			onChange={handleInputChange}
		   			/>
		  			</div>
		  			<button type="submit" 
		  			className="btn btn-primary mb-2"

		  			>Buscar</button>
					</form>

				</div>



				<div className="col-8">

					<h4>Resultados</h4>
					<hr/>

					{
						(q==='')
						&&
						<div className="alert alert-info">
							Encutra tu producto
						</div>
					}

					{
						(q !=='' && productFilter.length===0)
						&&
						<div className="alert alert-danger">
							No existe el producto {q}
						</div>
					}



					{
						productFilter.map(producto=>(
							<ProductCard
							key={producto.id}
							{...producto}
							/>
							))
					}
				</div>

			</div>

				
		</div>
	)
}

