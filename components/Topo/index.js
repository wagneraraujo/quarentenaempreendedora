import React from "react";
import base from "../../styles/styles.scss";
import css from "./style.scss";
import  Cont from '../Cont'
const Topo = () => {
    return (
        <section className={css.topoSite} id="topo">
            <div className={base.container}>
                <div className={css.linha}>
                    <div className={css.titleTopo}>
                        <h2 data-aos="fade-right">
                            Workshop Quarentena Empreendedora
                        </h2>
                        <p data-aos="fade-in">
                            Use a internet para crescer o seu negócio
                        </p>
                        <Cont />

                        <a href="#meinscrever" data-aos="fade-in">
                            Quero garantir minha vaga
                        </a>
                    </div>

                    <div className={css.imagemMulher}>
                        <picture
                            className={css.pictureWoman}
                            data-aos="fade-left"
                        >
                            <source
                                srcSet="../../images/mulher-empreendedora.png"
                                media="(min-width: 800px)"
                            />
                            <img
                                src="../../images/imagem-mobile.png"
                                alt="Mulher Empreendedora"
                                style={{ marginTop: "30px" }}
                            />
                        </picture>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Topo;
