import { initializeApp } from "firebase/app";
import {
  doc,
  getFirestore,
  setDoc,
  onSnapshot,
  getDoc,
  deleteDoc,
  updateDoc,
  deleteField,
  arrayRemove,
} from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";
import { ProductProps } from "@/types/types";
import { resetTheCart } from "@/store/nextSlice";

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
// * fix this and reset
export const addToShoppingCartList = async (
  user_uid: string,
  product: ProductProps
) => {
  const shoppingCartRef = doc(db, "shoppingCart", user_uid);

  try {
    const cartSnapshot = await getDoc(shoppingCartRef);
    let updatedCart; // Declare a variable to hold the updated cart data

    if (cartSnapshot.exists()) {
      const cartData = cartSnapshot.data();
      updatedCart = { ...cartData };

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
    } else {
      // Se o carrinho não existir, crie um novo com o item
      updatedCart = {
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
    }

    // Verifique se updatedCart é definido antes de atualizar o carrinho
    if (updatedCart) {
      await setDoc(shoppingCartRef, updatedCart);
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

    
      if (updatedCart.products && updatedCart.products[product_id]) {

        delete updatedCart.products[product_id];

        await setDoc(shoppingCartRef, updatedCart);

      }
    }
  } catch (error) {
    console.error(error);
  }
};

// Reset the cart
// * fix this and add
export const resetProductFromShoppingCart = async (user_uid: string) => {
  await deleteDoc(doc(db, "shoppingCart", user_uid));

};

// Increase 
// Increase the quantity of a product in the shopping cart
export const increaseQuantityFromShoppingCart = async (
  user_uid: string,
  product_id: string
) => {
  const shoppingCartRef = doc(db, "shoppingCart", user_uid);

  try {
    const cartSnapshot = await getDoc(shoppingCartRef);
    if (cartSnapshot.exists()) {
      const cartData = cartSnapshot.data();
      const updatedCart = { ...cartData };

      if (updatedCart.products && updatedCart.products[product_id]) {
        updatedCart.products[product_id].quantity += 1; // Increase quantity
        await setDoc(shoppingCartRef, updatedCart);
      }
    }
  } catch (error) {
    console.error(error);
  }
};

// Decrease the quantity of a product in the shopping cart
export const decreaseQuantityFromShoppingCart = async (
  user_uid: string,
  product_id: string
) => {
  const shoppingCartRef = doc(db, "shoppingCart", user_uid);

  try {
    const cartSnapshot = await getDoc(shoppingCartRef);
    if (cartSnapshot.exists()) {
      const cartData = cartSnapshot.data();
      const updatedCart = { ...cartData };

      if (updatedCart.products && updatedCart.products[product_id]) {
        // Decrease quantity and remove the product if it's less than or equal to 0
        if (updatedCart.products[product_id].quantity > 1) {
          updatedCart.products[product_id].quantity -= 1;
        }

        await setDoc(shoppingCartRef, updatedCart);
      }
    }
  } catch (error) {
    console.error(error);
  }
};
