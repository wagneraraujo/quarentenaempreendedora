import React from "react";
import base from "../../styles/styles.scss";
import css from "./style.scss";
const Topo = () => {
    return (
        <section className={css.topoSite}>
            <div className={base.container}>
                <div className={css.linha}>
                    <div className={css.titleTopo}>
                        <h2>Workshop Quarentena Empreendedora</h2>
                        <p>Use a internet para crescer o seu negócio</p>
                        <a href="#meinscrever">Quero me inscrever</a>
                    </div>

                    <div className={css.imagemMulher}>
                        <picture className={css.pictureWoman}>
                            <source
                                srcset="../../images/mulher-empreendedora.png"
                                media="(min-width: 800px)"
                            />
                            <img
                                src="../../images/imagem-mobile.png"
                                alt="Mulher Empreendedora"
        style={{marginTop:'30px'}}
                            />
                        </picture>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Topo;
