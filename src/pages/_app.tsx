import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { R_Layout } from "@/components";
import Head from "next/head";
import { Provider } from "react-redux";
import { persistor, store } from "@/store/store";
import { PersistGate } from "redux-persist/integration/react";
import { ProductsProvider } from "@/context/ProductsContext";
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
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
            <ProductsProvider>
              <R_Layout>
                <Component {...pageProps} />
              </R_Layout>
            </ProductsProvider>
          </PersistGate>
        </Provider>
      </div>
    </>
  );
}
