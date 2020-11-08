import React from 'react'
import {Switch,Route,Redirect} from "react-router-dom";
import {Navbar} from '../components/ui/Navbar'
import {MensScreen} from '../components/mens/MensScreen'
import {ProductScreen} from '../components/products/ProductScreen'
import {WomensScreen} from '../components/womens/WomensScreen'
import {HomeScreen} from '../components/products/HomeScreen'
import {SearchScreen} from '../components/search/SearchScreen'
export const DashboardRoutes = () => {
	return (
		<>

		<Navbar/>
		<div className="container mt-2">


			<Switch>

				<Route exact path="/home" component={HomeScreen}/>
				<Route exact path="/mens" component={MensScreen}/>
				<Route exact path="/producto/:productId" component={ProductScreen}/>
				<Route exact path="/womens" component={WomensScreen}/>
				<Route exact path="/search" component={SearchScreen}/>
				
				<Redirect to="/home" />

			</Switch>
		</div>
		
			
		</>
	)
}

