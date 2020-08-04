import React from "react";
import css from "./styled.scss";
import base from "../../styles/styles.scss";

const CallToAction = () => {
    return (
        <div className={css.calltoaction}>
            <div className={base.container}>
                <div className={css.linha}>

                <p>
                    Ta esperando o que para participar dessa oportunidade de
                    saber como usar a internet para crescer o seu negócio?{" "}
                </p>

            <div>
                <a href="#meinscrever">Quero me Inscrever</a>
            </div>
                </div>
            </div>
        </div>
    );
};
export default CallToAction;
