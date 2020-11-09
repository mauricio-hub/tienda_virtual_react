import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                eCommerce
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                      <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/"
                    >
                        HOME
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/mens"
                    >
                        HOMBRES
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/womens"
                    >
                        MUJERES
                    </NavLink>

                      <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/search"
                    >
                        BUSCAR PRODUCTO
                    </NavLink>
                </div>
            </div>

           
        </nav>
    )
}