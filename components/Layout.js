import Head from "next/head";
import Header from "./Header";
import { VerticalNavbar } from "./VerticalNavbar";
import s from "../styles/Layout.module.css";

export default function Layout({ children, pageTitle }) {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta charSet="UTF-8" />
        <meta name="description" content="Super hackathon" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Header />
      <div className={s.flex_container}>
        <VerticalNavbar />
        <main className="mt-20 ml-[10%] w-[100vw]">{children}</main>
      </div>
    </>
  );
}
