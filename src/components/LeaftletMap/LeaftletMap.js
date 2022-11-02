import React from 'react';
import { MapContainer } from 'react-leaflet/MapContainer';
import { TileLayer } from 'react-leaflet/TileLayer';
import { Polyline } from 'react-leaflet/Polyline';

import "leaflet/dist/leaflet.css";
import "./LeaftletMap.css";

const lat1 = 50.61548542530559;
const lon1 = 26.28512531518936;

let latlngs =
[
  [lat1, lon1],
  [50.614498, 26.295939],
  [50.612615, 26.316000],
  [50.611131, 26.332479],
  [50.610213, 26.342275],
  [50.609995, 26.342769],
  [50.609607, 26.342919],
  [50.609246, 26.34264],
  [50.609076, 26.342125],
  [50.609212, 26.341449],
  [50.609586, 26.341074],
  [50.612248, 26.341149],
  [50.613127, 26.341202],
  [50.614338, 26.341074],
  [50.615482, 26.340891],
  [50.616639, 26.340623],
  [50.618457, 26.339765],
  [50.620268, 26.338316],
  [50.62314, 26.335634],
  [50.626189, 26.332726],
  [50.632913, 26.326354],
  [50.638929, 26.320796],
  [50.64146, 26.319144],
  [50.644072, 26.318049],
  [50.647923, 26.316783],
  [50.650767, 26.315796],
  [50.650954, 26.316006],
  [50.65109, 26.316038],
  [50.651229, 26.315941],
  [50.651284, 26.315657],
  [50.651192, 26.31541],
  [50.651028, 26.315362],
  [50.650671, 26.313012],
  [50.650022, 26.308565],
  [50.649576, 26.306173],
  [50.649165, 26.304536],
  [50.648535, 26.302943],
  [50.647355, 26.300867],
  [50.64529, 26.297563],
  [50.640378, 26.289757],
  [50.638704, 26.287032],
  [50.63669, 26.283878]
];

const mapColor = {color: 'green'};

export default function LeaftletMap() {
    return (
        <>
            <MapContainer 
                center={latlngs[0]}
                zoom={14}
                scrollWheelZoom={true}>

                <Polyline pathOptions={mapColor} positions={latlngs} />
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />                
            </MapContainer>
        </>
    )
}