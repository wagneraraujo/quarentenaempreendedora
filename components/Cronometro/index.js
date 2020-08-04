import React from "react";
import Countdown from "react-countdown";
import css from "./style.scss";

const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
        // Render a complete state
        return "";
    } else {
        // Render a countdown
        return (
            <>

    <h3 className={css.seuTempo}>O seu tempo está acabando!</h3>
            <div className={css.todoCronometro}>
                <div>
                    {days} <span>Dias</span>
                </div>
                <div>
                    {hours}
                    <span>Horas</span>
                </div>
                <div>
                    {minutes}
                    <span>Minutos</span>
                </div>
                <div>
                    {seconds}
                    <span>Segundos</span>
                </div>
                <br />
                <br />
            </div>
        </>
        );
    }
};

const Cronometro = () => {
    return (
        <Countdown
            className={css.Cronometro}
            date={Date.now() + 277200000}
            renderer={renderer}
        />
    );
};
export default Cronometro;
