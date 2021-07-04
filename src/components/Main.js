import classes from "./css/main.module.css";

function Main(props) {
    return (
        <main className={classes.main}>
            <div className={classes.rightBorder}><h3>  IP Address</h3><h2>{props.ip}</h2></div>

            <div className={classes.rightBorder}><h3>  Location</h3><h2>{props.city} {props.region} {props.postalCode}</h2></div>

            <div className={classes.rightBorder}><h3>  Timezone</h3><h2>{props.timezone}</h2></div>

            <div><h3>  ISP</h3><h2>{props.isp}</h2></div>


        </main>
    );
}

export default Main;