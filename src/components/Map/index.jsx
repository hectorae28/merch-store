import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './styles.css';

const Map = ({ position }) => {
  return (
    <div className="leaflet-container" id="map">
      {position ? (
        <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution="© OpenStreetMap"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              Lugar de Entrega <br /> Estato del Envio: Preparando envio
            </Popup>
          </Marker>
        </MapContainer>
      ) : (
        <h1>f</h1>
      )}
    </div>
  );
};

export default Map;
