import { createContext, useContext, useState } from "react";

interface ShoppingCartContextProps {
  cartProducts: CartProduct[];
  addProductToCart: (product: CartProduct) => void;
  removeProductFromCart: (productId: number, removeAll: boolean) => void;
}

const ShoppingCartContext = createContext<ShoppingCartContextProps>(
  {} as ShoppingCartContextProps
);

export const useShoppingCartContext = () => useContext(ShoppingCartContext);

interface ShoppingCartContextProviderProps {
  children: React.ReactNode;
}

const ShoppingCartContextProvider = ({
  children,
}: ShoppingCartContextProviderProps) => {
  const [cartProducts, setCartProducts] = useState<CartProduct[]>([]);

  const addProductToCart = (product: CartProduct) => {
    const productInCart = cartProducts.find(
      (cartProduct) => cartProduct.id === product.id
    );

    if (productInCart) {
      const newProducts = cartProducts.map((cartProduct) => {
        if (cartProduct.id === product.id) {
          return { ...cartProduct, amount: cartProduct.amount++ };
        }
        return cartProduct;
      });
      return setCartProducts(newProducts);
    }
    setCartProducts((prev) => [...prev, { ...product }]);
  };

  const removeProductFromCart = (productId: number, removeAll?: boolean) => {
    const product = cartProducts.find((product) => product.id === productId);
    if (!product) return;

    if (product.amount === 1 || removeAll) {
      return setCartProducts((prev) =>
        prev.filter((product) => product.id !== productId)
      );
    }

    const newProducts = cartProducts.map((cartProduct) => {
      if (cartProduct.id === product.id) {
        return { ...cartProduct, amount: cartProduct.amount-- };
      }
      return cartProduct;
    });
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
