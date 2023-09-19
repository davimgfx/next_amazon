import React, { createContext, useState, useEffect } from "react";
import { db } from "@/utils/firebase/firebase";
import { doc, onSnapshot } from "firebase/firestore";
import { useSelector } from "react-redux";
import { StateProps } from "@/types/types";
import { StoreProduct } from "@/types/types";

export const ProductsContext = createContext([]);

export const ProductsProvider = ({ children }: any) => {
  const { user } = useSelector((state: StateProps) => state.next);
  const [userCartProducts, setUserCartProducts] = useState([]);
  const [unsubscribe, setUnsubscribe] = useState<(() => void) | null>(null); 

  useEffect(() => {
    if (user && user.uid) {
      const newUnsubscribe = onSnapshot(
        doc(db, "shoppingCart", user.uid),
        (cart) => {
          const cartData = cart.data();
          if (cart.exists() && cartData && cartData.products) {
            const productsData = cartData.products;
            const productKeys = Object.values(productsData);
            setUserCartProducts(productKeys);
            console.log(productKeys);
          } else {
            setUserCartProducts([]);
            console.log("Empty cart");
          }
        }
      );
      
      setUnsubscribe(() => newUnsubscribe);
    } else {
      
      setUnsubscribe(null);
      setUserCartProducts([]);
    }

    return () => {

      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, [user]);

  const contextValue = {
    userCartProducts,
  };
  
  return (
    <ProductsContext.Provider value={contextValue}>
      {children}
    </ProductsContext.Provider>
  );
};
