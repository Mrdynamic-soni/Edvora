import React from 'react';
import Card from './Card';
import UpcomingRidesData from '../Data/UpcomingRidesData';

const UpcomingRides = () => {
  return (
    <>
      {
        UpcomingRidesData.map((currData) => {
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
export default UpcomingRides;

