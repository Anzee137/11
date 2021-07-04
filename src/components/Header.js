import classes from "./css/header.module.css";
import React from "react";

function Header(props) {
    let newInput = React.createRef();
    let onInputChange = () => {
        let text = newInput.current.value;
        props.changeInput(text);
    }

    let findInfo = () => {
        let text = props.nowInput.trim();
        let re = /\d{3}.\d/gi;
        if (re.test(text)) {
            props.getInfo(text);
        }
        else {
            alert("Wrong ip");
        }
    }

    return (
        <header className={classes.header}>
            <h1>IP Address Tracker</h1>
            <div className={classes.inputBlock}>
                <input placeholder={"Search for any IP address or domain"} value={props.nowInput} onChange={onInputChange} ref={newInput} />
                <button onClick={findInfo}></button>
            </div>
        </header>
    );
}

export default Header;