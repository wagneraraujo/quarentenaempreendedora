import React from "react";
import css from "./style.scss";
import base from '../../styles/styles.scss'
const Sobre = () => {
    return (
        <section className={css.sobre} id="sobre">
            <div className={css.linhaTitulo}>
                <h2 data-aos="fade-down">Sobre o Workshop</h2>
                <p>
                    Serão 6 passos para te ajudar a criar seu próprio negócio e
                    vender mais na internet
                </p>
            </div>

            <div className={base.container}>


            <div className={css.linhaSobre}>
                <ul data-aos="fade-in">
                    <li>
                        <span className="number">1</span> Criando a Marca da
                        minha Empresa
                    </li>
                    <li>
                        <span className="number">2</span> Por onde começar no
                        Marketing de conteúdo
                    </li>
                    <li>
                        <span className="number">3</span> Como fazer um
                        planejamento estratégico para minha empresa
                    </li>
                    <li>
                        <span className="number">4</span> Como o CANVA pode
                        ajudar a minha empresa a ser um sucesso
                    </li>
                    <li>
                        <span className="number">5</span> Como usar as REDES
                        SOCIAIS para gerar mais vendas
                    </li>
                    <li>
                        <span className="number">6</span> Como impulsionar
                        minhas vendas na internet da maneira correta
                    </li>
                </ul>
            </div>
            </div>
        </section>
    );
};
export default Sobre;
