export interface ProductProps {
  brand: string;
  category: string;
  description: string;
  image: string;
  isNew: boolean;
  oldPrice: number;
  price: number;
  title: string;
  _id: number;
  
}

export interface StoreProduct {
  brand: string;
  category: string;
  description: string;
  image: string;
  isNew: boolean;
  oldPrice: number;
  price: number;
  title: string;
  _id: number ;
  quantity: number;
}
export type ProductsContextType = {
  userCartProducts: StoreProduct[];
};

export interface StateProps {
  productData: [];
  favoriteData: [];
  user: null | string;
  next: any;
}


export interface FormFields {
  email: string;
  password: string;
  confirmPassword: string;
  username: string;
}

