import React from "react";
import css from "./style.scss";
//import base from "../../styles/styles.scss";
import Pixel from './pixel'
const Footer = () => {
    return (
        <footer className={css.rodape}>
            <div className={css.voltartopo}>
    <a href="#topo">&#8593;	</a>
            </div>
            <div>
                <img src="../../images/logo_orign.png" alt="" />
            </div>
            <div> &copy; Todos os direitos reservados</div>


        
          <Pixel /> 
        </footer>
    );
};

export default Footer;
