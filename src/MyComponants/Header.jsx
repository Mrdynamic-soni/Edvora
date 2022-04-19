import React from 'react';
import { NavLink } from 'react-router-dom'
import '../App.css';
import Filter from './Filter';


const Header = () => {
    return (
        <>
         <nav className="navbar navbar-expand-lg navbar-light nav_bar navbar-dark" style={{ backgroundColor: "rgb(49, 47, 47)" }}>
                <div className="container-fluid">
                    <NavLink  className="nav-link px-5 linktxt" to="/NearestRide"> <p className='linktext'>Nearest Rides</p> </NavLink>
                    <NavLink className="nav-link px-5 linktxt" to="/UpcomingRides"> <p className='linktext'>Upcoming Rides(5)</p> </NavLink>
                    <NavLink className="nav-link px-5 linktxt" to="/PastRides"> <p className='linktext'>Past Rides(3)</p> </NavLink>
                    <div className="collapse navbar-collapse  px-5" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0" style={{ marginLeft: "auto" }}>
                            <li className="nav-item">
                                <Filter/>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Header;