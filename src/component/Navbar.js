import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import handleCart from "../redux/reducers/handleCart";



const Navbar = () => {
    const a = useSelector((state) => state.handleCart);
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
                <div className="container">
                <div className="buttons ms--6">
                            <NavLink to="/cart" className="btn btn-outline-dark">
                                <i className="fa fa-shopping-cart "></i>Cart ({a.length}) </NavLink>
                        </div>
                    <NavLink className="navbar-brand fw-bold fs-4 ms-2" to="/"> My collection </NavLink>
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse ms--6" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="navbar-brand" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="navbar-brand" to="/products">Products</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="navbar-brand" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="navbar-brand" to="/contacts">Contacts</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;