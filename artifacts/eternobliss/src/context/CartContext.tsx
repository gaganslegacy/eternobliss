import { createContext, useContext, useState, useEffect, useCallback } from "react";
import type { ReactNode } from "react";
import type { CartItem } from "../types/shopify";
import { shopifyFetch } from "../lib/shopify";
import {
  CREATE_CART,
  ADD_TO_CART,
  UPDATE_CART,
  REMOVE_FROM_CART,
} from "../lib/shopify-queries";

interface CartContextType {
  cartId: string | null;
  cartItems: CartItem[];
  cartTotal: number;
  cartCount: number;
  checkoutUrl: string | null;
  isOpen: boolean;
  isLoading: boolean;
  addToCart: (variantId: string, quantity: number, productHandle?: string) => Promise<void>;
  removeFromCart: (lineId: string) => Promise<void>;
  updateQuantity: (lineId: string, quantity: number) => Promise<void>;
  openCart: () => void;
  closeCart: () => void;
  goToCheckout: () => void;
}

const CartContext = createContext<CartContextType | null>(null);

function parseCartData(cart: {
  id: string;
  checkoutUrl: string;
  totalQuantity: number;
  lines: {
    edges: Array<{
      node: {
        id: string;
        quantity: number;
        merchandise: {
          id: string;
          title: string;
          price: { amount: string };
          product: {
            title: string;
            images: { edges: Array<{ node: { url: string } }> };
          };
        };
      };
    }>;
  };
  cost: {
    totalAmount: { amount: string; currencyCode: string };
    subtotalAmount: { amount: string };
  };
}): {
  cartItems: CartItem[];
  cartTotal: number;
  cartCount: number;
  checkoutUrl: string;
} {
  const cartItems: CartItem[] = cart.lines.edges.map(({ node }) => ({
    lineId: node.id,
    variantId: node.merchandise.id,
    productTitle: node.merchandise.product.title,
    variantTitle: node.merchandise.title,
    price: parseFloat(node.merchandise.price.amount),
    quantity: node.quantity,
    imageUrl: node.merchandise.product.images.edges[0]?.node.url || "",
    handle: "",
  }));

  return {
    cartItems,
    cartTotal: parseFloat(cart.cost.subtotalAmount.amount),
    cartCount: cart.totalQuantity,
    checkoutUrl: cart.checkoutUrl,
  };
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartId, setCartId] = useState<string | null>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [cartCount, setCartCount] = useState(0);
  const [checkoutUrl, setCheckoutUrl] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const savedCartId = localStorage.getItem("shopify_cart_id");
    if (savedCartId) {
      setCartId(savedCartId);
    }
  }, []);

  const addToCart = useCallback(async (variantId: string, quantity: number) => {
    setIsLoading(true);
    try {
      const lines = [{ merchandiseId: variantId, quantity }];

      let cart;
      if (!cartId) {
        const data = await shopifyFetch({
          query: CREATE_CART,
          variables: { lines },
        });
        cart = data.data.cartCreate.cart;
        setCartId(cart.id);
        localStorage.setItem("shopify_cart_id", cart.id);
      } else {
        const data = await shopifyFetch({
          query: ADD_TO_CART,
          variables: { cartId, lines },
        });
        cart = data.data.cartLinesAdd.cart;
      }

      const parsed = parseCartData(cart);
      setCartItems(parsed.cartItems);
      setCartTotal(parsed.cartTotal);
      setCartCount(parsed.cartCount);
      setCheckoutUrl(parsed.checkoutUrl);
      setIsOpen(true);
    } catch (error) {
      console.error("Failed to add to cart:", error);
    } finally {
      setIsLoading(false);
    }
  }, [cartId]);

  const removeFromCart = useCallback(async (lineId: string) => {
    if (!cartId) return;
    setIsLoading(true);
    try {
      const data = await shopifyFetch({
        query: REMOVE_FROM_CART,
        variables: { cartId, lineIds: [lineId] },
      });
      const cart = data.data.cartLinesRemove.cart;
      const parsed = parseCartData(cart);
      setCartItems(parsed.cartItems);
      setCartTotal(parsed.cartTotal);
      setCartCount(parsed.cartCount);
      setCheckoutUrl(parsed.checkoutUrl);
    } catch (error) {
      console.error("Failed to remove from cart:", error);
    } finally {
      setIsLoading(false);
    }
  }, [cartId]);

  const updateQuantity = useCallback(async (lineId: string, quantity: number) => {
    if (!cartId) return;
    if (quantity === 0) {
      await removeFromCart(lineId);
      return;
    }
    setIsLoading(true);
    try {
      const data = await shopifyFetch({
        query: UPDATE_CART,
        variables: {
          cartId,
          lines: [{ id: lineId, quantity }],
        },
      });
      const cart = data.data.cartLinesUpdate.cart;
      const parsed = parseCartData(cart);
      setCartItems(parsed.cartItems);
      setCartTotal(parsed.cartTotal);
      setCartCount(parsed.cartCount);
      setCheckoutUrl(parsed.checkoutUrl);
    } catch (error) {
      console.error("Failed to update cart:", error);
    } finally {
      setIsLoading(false);
    }
  }, [cartId, removeFromCart]);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  const goToCheckout = useCallback(() => {
    if (checkoutUrl) {
      window.location.href = checkoutUrl;
    }
  }, [checkoutUrl]);

  return (
    <CartContext.Provider
      value={{
        cartId,
        cartItems,
        cartTotal,
        cartCount,
        checkoutUrl,
        isOpen,
        isLoading,
        addToCart,
        removeFromCart,
        updateQuantity,
        openCart,
        closeCart,
        goToCheckout,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
}
