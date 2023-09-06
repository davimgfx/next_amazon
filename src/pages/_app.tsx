import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { R_Layout } from "@/components";
import Head from "next/head";
import { Provider } from "react-redux";
import { persistor, store } from "@/store/store";
import { PersistGate } from "redux-persist/integration/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <div className="font-bodyFont">
          <Head>
            <title>
              Amazon.com.au: Shop online for Electronics, Apparel, Toys, Books,
              ...
            </title>
          </Head>
          <R_Layout>
            <Component {...pageProps} />
          </R_Layout>
        </div>{" "}
      </PersistGate>
    </Provider>
  );
}
