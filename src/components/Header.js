import classes from "./css/header.module.css";
import React from "react";

function Header(props) {
    let newInput = React.createRef();
    let onInputChange = () => {
        let text = newInput.current.value;
        props.changeInput(text);
    }
    
    let findInfro = () => {
        let re = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/
        let text = props.nowInput.trim();
        if (re.test(text)){
        props.getInfo(text);
        }else{
            alert("wrong input");
        }
    }
   

    return (
        <header className={classes.header}>
            <h1>IP Address Tracker</h1>
            <div className={classes.inputBlock}>
                <input placeholder={"Search for any IP address or domain"} value={props.nowInput} onChange={onInputChange} ref={newInput} />
                <button onClick={findInfo}></button>
            </div>
            <div>
                <a href="https://github.com/Atryom-Bohaturou/IpAddres-Tracker-React-Redux">Github</a>
            </div>
        </header>
    );
}

export default Header;
