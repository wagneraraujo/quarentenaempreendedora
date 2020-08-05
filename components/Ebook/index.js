import React from "react";
import css from "./styled.scss";
import base from "../../styles/styles.scss";

const Ebook = () => {
    return (
        <div className={css.calltoaction}>
            <div className={base.container}>
                <div className={css.linha}>

        
                    <p> Quer saber como vender na internet em 2020? Baixe agora nosso <span>ebook grátis </span></p>
                <img src="../../images/mokup-ebook.png" alt="Ebook Quarentena Empreendedora" />
            <div>
                <a href="http://mariaeduardafxl-rdsm-site.rds.land/quarentena-empreendedora" target="_Blank">Baixar Agora</a>
            </div>
                </div>
            </div>
        </div>
    );
};
export default Ebook;
