import React from 'react';
import Navbar from "./MyComponants/Navbar";
import Header from "./MyComponants/Header";
import {Route, Routes } from 'react-router-dom';
import NearestRide from './MyComponants/NearestRide';
import UpcomingRides from "./MyComponants/UpcomingRides";
import PastRides from "./MyComponants/PastRides";
import Error from "./MyComponants/Error";
import Filter from "./MyComponants/Filter";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';


const App =()=>{

  return (
    <>
    <Navbar/>
    <Header/>
    <Routes>
        <Route exact path="/" element={<NearestRide/>}/>
        <Route exact path="/UpcomingRides" element={<UpcomingRides/>}/>
        <Route exact path="/NearestRide" element={<NearestRide/>}/>
        <Route exact path="/PastRides" element={<PastRides/>}/>
        <Route exact path="/Filter" element={<Filter/>}/>
        <Route exact path="*" element={<Error/>}/>
    </Routes>
  
    </>
  );
}

export default App;
