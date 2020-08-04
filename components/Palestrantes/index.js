import React from "react";
import css from "./style.scss";
import base from "../../styles/styles.scss";

const Palestrantes = () => {
    return (
        <section className={css.palestrantes} id="palestrantes">
            <div className={css.linhatitle}>
                <h3 data-aos="fade-in">Quem são as palestrantes?</h3>
            </div>
            <div className={base.container}>
                <div className={css.linha} data-aos="fade-in">
                    <div className={css.itemPalestrante}>
                        <div className="imagem">
                            <img
                                src="../../images/karol_barbosa.png"
                                alt="Karol Barbosa"
                            />
                        </div>
                        <div>
                            <h4>Karol Barbosa</h4>
                        </div>
                        <div>
                            <p>
                                Jornalista de formação, escritora por amor e
                                produtora de conteúdo de carreira. Trabalha com
                                internet desde desde 2013.
                            </p>
                        </div>
                    </div>

                    <div className={css.itemPalestrante}>
                        <div className="imagem">
                            <img
                                src="../../images/maduh_hasssliche.png"
                                alt="Maduh Hasslich"
                            />
                        </div>
                        <div>
                            <h4>Maduh Hassliche</h4>
                        </div>
                        <div>
                            <p>
                                Uma das professoras de português mais jovem na
                                internet e estudante constante no marketing
                                digital.
                            </p>
                        </div>
                    </div>

                    <div className={css.itemPalestrante}>
                        <div className="imagem">
                            <img
                                src="../../images/andrieli_alves.png"
                                alt="Andrieli Alves"
                            />
                        </div>
                        <div>
                            <h4>Andrieli Alves</h4>
                        </div>
                        <div>
                            <p>
                                
                                Idealizadora do Diagrama Criativo e Designer
                                Gráfico com foco em Identidade Visual.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Palestrantes;
