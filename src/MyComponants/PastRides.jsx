import React from 'react';
import Card from './Card';
import PastRidesData from '../Data/PastRidesData';


const PastRides = () => {
  return (
    <>
      {
        PastRidesData.map((currData) => {
          return (
            <Card
              id={currData.id}
              station={currData.origin_station_code}
              station_path={currData.station_path}
              date={currData.date}
              distace={currData.station_path}
              city={currData.state}
              state={currData.city} />
          )
        })
      }
    </>
  );

}
export default PastRides;

