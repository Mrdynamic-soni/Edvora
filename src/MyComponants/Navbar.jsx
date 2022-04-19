import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import '../App.css';
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light nav_bar navbar-dark" style={{ backgroundColor: "black" }}>
                <div className="container-fluid">
                    <NavLink className="navbar-brand px-5" to="/"> <h5 style={{ color: "white", fontSize: "30px" }}>Edvora</h5> </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse  px-5" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0" style={{ marginLeft: "auto" }}>
                            <li className="nav-item">
                                <NavLink className="nav-link pt-3 " style={{color:"white", fontSize:"20px"}} to="/">Saurabh Soni</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/"> <img className="img rounded-circle " src="https://avatars.githubusercontent.com/u/61721761?v=4" alt="Saurabh" height="44px" width="44px" /> </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;