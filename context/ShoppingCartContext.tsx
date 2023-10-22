import { createContext, useContext, useEffect, useState } from "react";

interface ShoppingCartContextProps {
  cartProducts: CartProduct[];
  addProductToCart: (product: CartProduct) => void;
  removeProductFromCart: (productId: number, removeAll: boolean) => void;
}

const ShoppingCartContext = createContext<ShoppingCartContextProps>(
  {} as ShoppingCartContextProps
);

export const useShoppingCartContext = () => useContext(ShoppingCartContext);

const CART_STORAGE_KEY = "cartProducts";

const ShoppingCartContextProvider = ({ children }: ContextProviderProps) => {
  const [cartProducts, setCartProducts] = useState<CartProduct[]>([]);

  useEffect(() => {
    const storedCart = localStorage.getItem(CART_STORAGE_KEY);
    if (storedCart) {
      setCartProducts(JSON.parse(storedCart));
    }
  }, []);

  const addProductToCart = (product: CartProduct) => {
    const productInCart = cartProducts.find(
      (cartProduct) => cartProduct.id === product.id
    );

    if (productInCart) {
      const newProducts = cartProducts.map((cartProduct) => {
        if (cartProduct.id === product.id) {
          return { ...cartProduct, amount: cartProduct.amount + 1 };
        }
        return cartProduct;
      });
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(newProducts));
      return setCartProducts(newProducts);
    }
    setCartProducts((prev) => {
      const newProducts = [...prev, { ...product }];
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(newProducts));
      return newProducts;
    });
  };

  const removeProductFromCart = (productId: number, removeAll: boolean) => {
    const product = cartProducts.find((product) => product.id === productId);
    if (!product) return;

    if (product.amount === 1 || removeAll) {
      return setCartProducts((prev) => {
        const newProducts = prev.filter((product) => product.id !== productId);
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(newProducts));
        return newProducts;
      });
    }

    const newProducts = cartProducts.map((cartProduct) => {
      if (cartProduct.id === product.id) {
        return { ...cartProduct, amount: cartProduct.amount - 1 };
      }
      return cartProduct;
    });
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(newProducts));
    return setCartProducts(newProducts);
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        cartProducts,
        addProductToCart,
        removeProductFromCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export { ShoppingCartContextProvider };
