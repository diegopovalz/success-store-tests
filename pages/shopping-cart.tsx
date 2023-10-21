import { useShoppingCartContext } from "@/context/ShoppingCartContext";
import Image from "next/image";

const ShoppingCart = () => {
  const { cartProducts, removeProductFromCart } = useShoppingCartContext();

  const handleProductDelete = (productId: number) => {
    removeProductFromCart(productId, true);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Item</th>
        </tr>
        <tr>
          <th>Price</th>
        </tr>
        <tr>
          <th>Quantity</th>
        </tr>
        <tr>
          <th>Total</th>
        </tr>
        <tr>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>
        {cartProducts.map((product) => (
          <tr key={product.id}>
            <td className="flex flex-col">
              <Image src="" alt="Item image" width={100} height={100} />
              <span>{product.title}</span>
            </td>
            <td>
              <span>{product.price}</span>
            </td>
            <td>
              <span>{product.amount}</span>
            </td>
            <td>
              <span>{product.price * product.amount}</span>
            </td>
            <td>
              <button
                onClick={() => {
                  handleProductDelete(product.id);
                }}
              >
                Remove
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ShoppingCart;
