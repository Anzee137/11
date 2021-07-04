import Header from "./Header";
import { connect } from "react-redux";
import { changeInput } from "./../redux/headerReducer";
import { getInfo } from "./../redux/headerReducer";

function HeaderContainer(props) {
    return <Header nowInput={props.nowInput} changeInput={props.changeInput} getInfo={props.getInfo} />
}

let mapStateToProps = (state) => ({
    nowInput: state.headerReducer.nowInput,
});

export default connect(mapStateToProps, { changeInput, getInfo })(HeaderContainer);