
import React from 'react';
import css from './style.scss'
const MenuBurger = () => {


    return(
        <div className={css.menuburger}>         <nav>
                            <ul>
                                <li>
                                    <a href="#duvidas">Dúvidas</a>
                                </li>
                                <li>
                                    <a href="#sobre">Sobre</a>
                                </li>
                                <li>
                                    <a href="#meinscrever">Inscrição</a>
                                </li>
                                <li>
                                    <a href="#palestrantes">Palestrantes</a>
                                </li>
                            </ul>
                        </nav>


        </div>
    )
}
export default MenuBurger




