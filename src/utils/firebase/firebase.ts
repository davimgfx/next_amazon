import { initializeApp } from "firebase/app";
import {
  doc,
  getFirestore,
  setDoc,
  onSnapshot,
  getDoc,
} from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";
import { ProductProps } from "@/types/types";

const firebaseConfig = {
  apiKey: "AIzaSyAZ-vjhiTBkGqcp0OIdvMW483RbT8N0xVw",
  authDomain: "next-73a25.firebaseapp.com",
  projectId: "next-73a25",
  storageBucket: "next-73a25.appspot.com",
  messagingSenderId: "1041869012316",
  appId: "1:1041869012316:web:b66a277dc876226bc09599",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();

// Auth session

// Create Account
export const createAuthUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

// Login Account
export const loginAuthUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

// Update the username name
export const updateAuthProfile = async (username: string) => {
  const user = auth.currentUser;
  if (user) {
    return await updateProfile(user, { displayName: username });
  }
};

// Logout
export const signOutAuth = async () => {
  return signOut(auth);
};

// Database session

export const db = getFirestore();

//Add products to the database
export const addToShoppingCartList = async (
  user_uid: string,
  product: ProductProps
) => {
  const shoppingCartRef = doc(db, "shoppingCart", user_uid);

  try {
    const cartSnapshot = await getDoc(shoppingCartRef);
    if (cartSnapshot.exists()) {
      const cartData = cartSnapshot.data();
      const updatedCart = { ...cartData };

      // Verifique se o produto já está no carrinho
      if (updatedCart.products && updatedCart.products[product._id]) {
        updatedCart.products[product._id].quantity += 1;
      } else {
        updatedCart.products[product._id] = {
          brand: product.brand,
          category: product.category,
          description: product.description,
          image: product.image,
          isNew: product.isNew,
          oldPrice: product.oldPrice,
          price: product.price,
          title: product.title,
          _id: product._id,
          quantity: 1,
        };
      }

      // Atualize o carrinho no Firebase
      await setDoc(shoppingCartRef, updatedCart);
    } else {
      // Se o carrinho não existir, crie um novo com o item
      const newCart = {
        products: {
          [product._id]: {
            _id: product._id,
            brand: product.brand,
            category: product.category,
            description: product.description,
            image: product.image,
            isNew: product.isNew,
            oldPrice: product.oldPrice,
            price: product.price,
            title: product.title,
            quantity: 1,
          },
        },
      };
      await setDoc(shoppingCartRef, newCart);
    }
  } catch (error) {
    console.error(error);
  }
};

// Remove the products
export const removeProductFromShoppingCart = async (
  user_uid: string,
  product_id: string
) => {
  
  const shoppingCartRef = doc(db, "shoppingCart", user_uid);

  try {
    const cartSnapshot = await getDoc(shoppingCartRef);
    if (cartSnapshot.exists()) {
      const cartData = cartSnapshot.data();
      const updatedCart = { ...cartData };

      // Verifique se o produto está no carrinho
      if (updatedCart.products && updatedCart.products[product_id]) {
        const product = updatedCart.products[product_id];

        delete updatedCart.products[product_id];

        // Atualize o carrinho no Firebase
        await setDoc(shoppingCartRef, updatedCart);
      }
    }
  } catch (error) {
    console.error(error);
  }
};

// Get the products

// export const getProductsInRealTime = async (user_uid: string) => {
//   onSnapshot(doc(db, "shoppingCart", user_uid), (cart) => {
//     if (cart.exists()) {
//       const productsData = cart.data().products;
//       const productKeys = Object.values(productsData);
//       return productKeys

//     } else {
//       console.log("Empty cart");
//     }
//   });
// };
