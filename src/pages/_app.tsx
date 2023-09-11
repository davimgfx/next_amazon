import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { R_Layout } from "@/components";
import Head from "next/head";
import { Provider } from "react-redux";
import { persistor, store } from "@/store/store";
import { PersistGate } from "redux-persist/integration/react";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps: {session,...pageProps} }: AppProps) {
  return (
    <>
      <Head>
        <title>
          Amazon.com.au: Shop online for Electronics, Apparel, Toys, Books, ...
        </title>
      </Head>
      <div className="font-bodyFont">
        <Provider store={store}>
          <PersistGate persistor={persistor} loading={null}>
            <SessionProvider session={session}>
              <R_Layout>
                <Component {...pageProps} />
              </R_Layout>
            </SessionProvider>
          </PersistGate>
        </Provider>
      </div>
    </>
  );
}
