import Main from "./Main";
import { connect } from "react-redux";

function MainContainer(props) {
    return <Main {...props} />
}

let mapStateToProps = state => ({
    ip: state.headerReducer.info.ip,
    city: state.headerReducer.info.location.city,
    postalCode: state.headerReducer.info.location.postalCode,
    region: state.headerReducer.info.location.region,
    timezone: state.headerReducer.info.location.timezone,
    isp: state.headerReducer.info.isp,
})


export default connect(mapStateToProps, {})(MainContainer);