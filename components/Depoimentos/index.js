
import React from "react";
import css from "./style.scss";
import base from "../../styles/styles.scss";

const Depoimentos = () => {
    return(
        <section className={css.depoimentos}>
            <div className={base.container}>
                <div className={css.titleDepoimentos}><h3>O que as pessoas estão falando</h3></div>
                <div className={css.linha}>
                    <div className={css.itemDepoimento}>
                        <img src="../../images/prova_social_1.jpg" alt="depoimento 1" />
                    </div>
                    <div className={css.itemDepoimento}>
                        <img src="../../images/prova_social_2.jpg" alt="depoimento 2" />
                    </div>
                    <div className={css.itemDepoimento}>
                        <img src="../../images/prova_social_3.jpg" alt="depoimento 3" />
                    </div>
                </div>
            </div>
    
        </section>
    )
}
export default Depoimentos
