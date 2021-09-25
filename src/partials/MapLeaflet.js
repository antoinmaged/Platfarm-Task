import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
// import overlay1 from '../images/Overlay/OverlayMap1.tiff';
// import overlay2 from '../images/Overlay/overlay2.tiff'
// import overlay3 from '../images/Overlay/overlay3.tiff'
// import overlay4 from '../images/Overlay/overlay4.tiff'
function MapLeaflet() {

  return (
  <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}>
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <div id='overlay'>   </div>
    <Marker position={[51.505, -0.09]}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>
  );
}

export default MapLeaflet;