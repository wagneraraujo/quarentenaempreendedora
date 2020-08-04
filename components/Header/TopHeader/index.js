import React from "react";
import css from "./style.scss";
import base from "../../../styles/styles.scss";
const TopHeader = () => {
    return (
        <div className={css.topheader}>
            <div className={base.container}>
                <div className={css.linha}>
                    <div className={css.menu}>
                        <img
                            src="../../../images/logo_branca.png"
                            alt="Quarentena Empreendedora"
                        />
                    </div>
                    <div className={css.menuSite}>
                        <nav>
                            <ul>
                                <li>
                                    <a href="#duvidas">Dúvidas</a>
                                </li>
                                <li>
                                    <a href="#sobre">Sobre</a>
                                </li>
                                <li>
                                    <a href="#inscricao">Inscrição</a>
                                </li>
                                <li>
                                    <a href="#palestrantes">Palestrantes</a>
                                </li>
                            </ul>
                        </nav>

                        <div className={css.openmenu}>
                            <a href="#menu">
                                <img src="../../../images/menu.png" alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopHeader;
