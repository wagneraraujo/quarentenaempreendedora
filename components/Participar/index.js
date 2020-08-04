import React from "react";
import css from "./style.scss";
import base from "../../styles/styles.scss";

const Participar = () => {
    return (
        <section className={css.participar} id="meinscrever">
            <div className={css.titleParticipar}>
                <h2>
                    Para participar, você pode aderir a um dos pacotes abaixo:
                </h2>
            </div>
            <div className={base.container}>
                <div className={css.linha}>
                    
                        <div className={css.itemPreco}>
                            <div><h3>Individual <span>R$ 97,00</span></h3></div>
                            <div className={css.precoDescricao}>Ou em 10x de R$ 8,90</div>
                            <div><a href="http://mpago.la/27xqC8t" target="_Blank">Eu quero</a></div>
                        </div>

                        <div className={css.itemPreco}>
                            <div><h3>Duplo <span>R$ 174,00</span></h3></div>
                            <div className={css.precoDescricao}>Ou em 10x de R$ 8,90</div>
                            <div><a href="http://mpago.la/1zvXYN6" target="_Blank">Eu quero</a></div>
                        </div>
                        <div className={css.itemPreco}>
                            <div><h3>Triplo <span>R$ 246,00</span></h3></div>
                            <div className={css.precoDescricao}>Ou em 10x de R$ 8,90</div>
                            <div><a href="http://mpago.la/1NTN6NN" target="_Blank">Eu quero</a></div>
                        </div>
                        <div className={css.itemPreco}>
                            <div style={{textAlign:'center'}}><h3>Combo Maxx <br /> <span>(R$ 80 cada)</span></h3>
                                <p className={css.precoDescricao}>(10 pessoas + 1 vaga grátis)</p>
                            </div>
                            
                            <div><a href="http://mpago.la/25FeAYW" target="_Blank">Eu quero</a></div>
                        </div>
                </div>
            </div>
        </section>
    );
};
export default Participar;
