import React,{useEffect,useState} from 'react';
import Card from './Card';

const NearestRide = () => {
  const url = "http://assessment.api.vweb.app/rides";

  const [rideDetail, setRideDetail] = useState([]);
  const getData = async () => {
    const response = await fetch(url);
    setRideDetail(await response.json());

  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      {
        rideDetail.map((currData) => {
          return (
            <Card
              id={currData.id}
              station={currData.origin_station_code}
              station_path={currData.station_path}
              date={currData.date}
              distace={currData.station_path[0]-currData.station_path[-1]}
              city={currData.state}
              state={currData.city} />
          )
        })
      }


    </>
  );

}
export default NearestRide;