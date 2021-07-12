import classes from "./css/header.module.css";
import React from "react";

function Header(props) {
    let newInput = React.createRef();
    let onInputChange = () => {
        let text = newInput.current.value;
        props.changeInput(text);
    }
    
    let findInfro = () => {
    let text = props.nowInput.trim();
    props.getInfo(text);
    }
   

    return (
        <header className={classes.header}>
            <h1>IP Address Tracker</h1>
            <div className={classes.inputBlock}>
                <input placeholder={"Search for any IP address or domain"} value={props.nowInput} pattern="\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}" onChange={onInputChange} ref={newInput} />
                <button onClick={findInfo}></button>
            </div>
        </header>
    );
}

export default Header;
