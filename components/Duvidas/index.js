
import React from "react";
import css from "./style.scss";
import base from "../../styles/styles.scss";
import Collapse from '../../components/Colapse'


const Duvidas = () => {
    return(
        <section className={css.duvidas}>
            <div className={css.titleDuvidas}>
    <h3>Dúvidas Frequentes</h3>
</div>


<div className={base.container}>
    <div className={css.linha}>
        <div className={css.col}>
            <Collapse/>
        </div>
        <div className={css.col}>
            <Collapse />
        </div>
    </div>
</div>
        </section>
    )
}

export default Duvidas
