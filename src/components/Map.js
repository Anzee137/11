import "./css/map.css";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

function Map(props) {
    let position = [props.lat, props.lng]
    return (
        <MapContainer center={position} zoom={2} scrollWheelZoom={true}  >
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
                <Popup>
                    This ip is here.
                </Popup>
            </Marker>
        </MapContainer>
    );
}

export default Map;