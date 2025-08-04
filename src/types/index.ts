export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  prepTime: string;
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface AppState {
  cartItems: CartItem[];
  wishlistItems: MenuItem[];
  user: {
    name: string;
    email: string;
  } | null;
}

export type AppAction = 
  | { type: 'ADD_TO_CART'; payload: MenuItem }
  | { type: 'REMOVE_FROM_CART'; payload: string }
  | { type: 'UPDATE_CART_QUANTITY'; payload: { id: string; quantity: number } }
  | { type: 'ADD_TO_WISHLIST'; payload: MenuItem }
  | { type: 'REMOVE_FROM_WISHLIST'; payload: string }
  | { type: 'SET_USER'; payload: { name: string; email: string } }
  | { type: 'CLEAR_CART' }; 