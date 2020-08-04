import React from "react";
import css from "./style.scss";
import base from "../../styles/styles.scss";

const Bonus = () => {
    return (
        <section className={css.bonus}>
            <div className={css.titleBonus}>
                <h3 data-aos="zoom-in">E não é só isso! Você também vai receber 3 bônus!</h3>
            </div>

            <div className={base.container}>
                <div className={css.linha}>
                    <div className={css.item} data-aos="fade-in">
                        <div className="imagemItem">
                            <img
                                src="../../images/bonus.png"
                                alt="Bônus - Quarentena Empreendedora"
                            />
                        </div>
                        <div className="descricao">
                            <p>
                                Participação no sorteio de
                                <strong>1 mês de gerenciamento</strong> do
                                Instagram da sua empresa
                            </p>
                        </div>
                    </div>

                    <div className={css.item} data-aos="fade-in">
                        <div className="imagemItem">
                            <img
                                src="../../images/bonus.png"
                                alt="Bônus - Quarentena Empreendedora"
                            />
                        </div>
                        <div className="descricao">
                            <p>
                                Participação no sorteio do{" "}
                                <strong>livro Armas da Persuasão</strong>.
                            </p>
                        </div>
                    </div>

                    <div className={css.item} data-aos="fade-in">
                        <div className="imagemItem">
                            <img
                                src="../../images/bonus.png"
                                alt="Bônus - Quarentena Empreendedora"
                            />
                        </div>
                        <div className="descricao">
                            <p>
                                Acesso ao grupo <strong>EXCLUSIVO</strong> de
                                engajamento e parcerias
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Bonus;
