import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { R_Layout } from "@/components";
import Head from "next/head";
import { Provider } from "react-redux";
import { persistor, store } from "@/store/store";
import { PersistGate } from "redux-persist/integration/react";
import { ProductsProvider } from "@/context/ProductsContext";
import { useRouter } from "next/router"; // Importar o useRouter do Next.js

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const router = useRouter();
  // Verificar se a página atual é 'login' ou 'register'
  const isLoginPage = router.pathname === "/login";
  const isRegisterPage = router.pathname === "/register";

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
              {isLoginPage || isRegisterPage ? (
                <Component {...pageProps} />
              ) : (
                <R_Layout>
                  <Component {...pageProps} />
                </R_Layout>
              )}
            </ProductsProvider>
          </PersistGate>
        </Provider>
      </div>
    </>
  );
}
