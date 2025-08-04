import React, { createContext, useReducer, ReactNode } from "react";
import { AppState, AppAction } from "../types/index";

const initialState: AppState = {
  cartItems: [],
  wishlistItems: [],
  user: null,
};

function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case "ADD_TO_CART": {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return {
        ...state,
        cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
      };
    }
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };
    case "UPDATE_CART_QUANTITY":
      return {
        ...state,
        cartItems: state.cartItems
          .map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: action.payload.quantity }
              : item
          )
          .filter((item) => item.quantity > 0),
      };
    case "ADD_TO_WISHLIST": {
      if (state.wishlistItems.find((item) => item.id === action.payload.id)) {
        return state;
      }
      return {
        ...state,
        wishlistItems: [...state.wishlistItems, action.payload],
      };
    }
    case "REMOVE_FROM_WISHLIST": {
      return {
        ...state,
        wishlistItems: state.wishlistItems.filter(
          (item) => item.id !== action.payload
        ),
      };
    }
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };
    case "CLEAR_CART":
      return {
        ...state,
        cartItems: [],
      };
    default:
      return state;
  }
}

export const AppContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
} | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}
