import React from "react";
import css from "./style.scss";
import base from "../../styles/styles.scss";
import Collapse from "../../components/Colapse";

const Duvidas = () => {
    return (
        <section className={css.duvidas}>
            <div className={css.titleDuvidas}>
                <h3>Dúvidas Frequentes</h3>
            </div>

            <div className={base.container}>
                <div className={css.linha}>
                    <div className={css.col}>
                        <Collapse button="O que vou aprender?">
                            <ul>
                                <li>
                                    1. Sobre marca, posicionamento e como usar
                                    uma identidade visual da forma correta e
                                    profissional.
                                </li>
                                <li>
                                    2. Marketing de conteúdo, como funciona a
                                    venda na internet e onde focar os seus
                                    esforços.
                                </li>
                                <li>
                                    3. Planejar as metas da sua empresa e como
                                    fazer um calendário editorial que funciona.
                                </li>
                                <li>
                                    4. Usar o aplicativo CANVA, o que você deve
                                    e não deve fazer, quais estratégias usar,
                                    como utilizar da forma correta e se você
                                    deve ou não investir nessa plataforma
                                </li>
                                <li>
                                    5. Tudo o que você precisa fazer para ganhar
                                    mais seguidores e, consequentemente,
                                    aumentar as suas vendas nas redes sociais
                                    mais usadas no momento
                                </li>
                                <li>
                                    6. Vai aprender a fazer tráfego e
                                    impulsionamento das suas publicações nas
                                    redes sociais e seja mais visto e
                                    consequentemente aumente suas vendas.
                                </li>
                                <li>
                                    Ah, e no final vamos ter um momento para
                                    você tirar todas as dúvidas e até mesmo dar
                                    algumas orientações pontuais sobre o seu
                                    negócio.
                                </li>
                            </ul>
                        </Collapse>

                        <Collapse button="Estou começando do zero, não sei nada de marketing digital. O workshop é para mim?">
<p>Independente se você não sabe nada de marketing digital, se tem ou não um perfil nas redes sociais ou se já fez outras estratégias para o seu negócio, o workshop é para você!  
    É um método utilizado por grandes empresas e nós mesmas colocamos em prática todos os dias nas empresas em que trabalhamos e, já estamos usando em nossos próprios negócios.</p>
<p>
Não é um achismo da nossa parte. Depois de anos estudando todos os dias sobre marketing digital e colocando em prática em todos os lugares que já trabalhamos sentimos a segurança de fazer algo que sempre quisemos fazer: ajudar pequenos empreendedores a vender na internet.</p>
                        </Collapse>
                    </div>
                    <div className={css.col}>
                        <Collapse button="Qual o cronograma do workshop?">
                            Serão nos dias 07 de Agosto às 20h, 08 de Agosto às
                            15h e 10 de Agosto às 20h
                        </Collapse>


                        <Collapse button="Não tenho dinheiro para me inscrever. E agora?">
                            <p>
        Nós acreditamos que o Workshop Quarentena empreendedora não é um custo e sim um investimento, no seu desenvolvimento profissional e no seu negócio. O valor é muito baixo comparado aos conhecimentos que serão repassados para você, são anos de estudos e testes. <br /> 

Será que “não tenho dinheiro” é só uma desculpa? Pare para refletir e revise suas prioridades, por exemplo: se você deixar de comprar um lanche no final de semana você consegue investir? Se sim, a hora é agora, afinal quem quer dá um jeito e persiste!
                            </p>
                        </Collapse>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Duvidas;
