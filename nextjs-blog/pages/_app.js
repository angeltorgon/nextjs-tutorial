import React from "react";
import Head from "next/head";
import "../styles/global.scss";

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Boogaloo&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <Component {...pageProps} />
        </>
    );
}
