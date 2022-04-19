import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const Map = () => {
    const { isLoaded } = useLoadScript({
        googleMapsApikey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    });
    const center = {
        lat: 43,
        lng: -80
    }
    const mapContainerStyle = {
        width: "22vw",
        height: "28vh",
        borderRadius:"10px"
    };
    if (!isLoaded) return <div>Loading...</div>;
    return (
        <>
            <GoogleMap zoom={10} center={center} mapContainerStyle={mapContainerStyle} >
                <Marker position={center} />
            </GoogleMap >
        </>
    );
}
export default Map;
