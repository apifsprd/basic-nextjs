import { ReactNode } from "react";
import Header from "../header";
import Footer from "../footer";
import Styles from './Layout.module.css';
import Head from "next/head";

interface LayoutProps {
    children: ReactNode;
    pageTitle: string;
}

export default function Layout(props: LayoutProps) {
    const { children, pageTitle } = props;
    return (
        <>
            <Head>
                <title>NextJS | {pageTitle}</title>
            </Head>
            <div className={Styles.container}>
                <Header />
                <div className={Styles.content}>{children}</div>
                <Footer />
            </div>
        </>
    )
}