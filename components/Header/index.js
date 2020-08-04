import React from "react";
import Head from "next/head";
import TopHeader from "../../components/Header/TopHeader";
const Header = () => {
    return (
        <header>
            <title>
                Quarentena Empreendedora - Use a internet para crescer seu
                negócio
            </title>
            <meta
                name="description"
                content="Quarentena Empreendedora, use a internet para crescer seu negócio"
            />
            <meta
                name="viewport"
                content="initial-scale=1.0, width=device-width"
            />
            <meta
                property="og:title"
                content="Quarentena Empreededora"
                key="title"
            />

            <TopHeader />
        </header>
    );
};
export default Header;
