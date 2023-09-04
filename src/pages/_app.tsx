import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { R_Layout } from "@/components";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="font-bodyFont">
      <Head>
        <title>
          Amazon.com.au: Shop online for Electronics, Apparel, Toys, Books, ...
        </title>
      </Head>
      <R_Layout>
        <Component {...pageProps} />
      </R_Layout>
    </div>
  );
}
