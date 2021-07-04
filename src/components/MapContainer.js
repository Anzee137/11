import { connect } from "react-redux";
import "./css/map.css";
import Map from "./Map";



function MapContainer(props) {

    return <Map {...props} />
}

let mapStateToProps = (state) => ({
    lat: state.headerReducer.info.location.lat,
    lng: state.headerReducer.info.location.lng,
})

export default connect(mapStateToProps, {})(MapContainer);