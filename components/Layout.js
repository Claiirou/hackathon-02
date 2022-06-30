import Head from "next/head";
import Header from "./Header";
import { VerticalNavbar } from "./VerticalNavbar";

export default function Layout({ children, pageTitle }) {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta charset="UTF-8" />
        <meta name="description" content="Super hackathon" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <VerticalNavbar />
      <main>{children}</main>
      <footer>footer</footer>
    </>
  );
}
