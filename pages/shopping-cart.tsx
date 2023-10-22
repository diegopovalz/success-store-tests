import { useShoppingCartContext } from "@/context/ShoppingCartContext";
import Image from "next/image";

const ShoppingCart = () => {
  const { cartProducts, addProductToCart, removeProductFromCart } =
    useShoppingCartContext();

  const handleProductAdd = (productIndex: number) => {
    addProductToCart(cartProducts[productIndex]);
  };

  const handleProductRemove = (
    productIndex: number,
    remove: boolean = true
  ) => {
    if (remove) removeProductFromCart(cartProducts[productIndex].id, false);
    else removeProductFromCart(cartProducts[productIndex].id, true);
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
          <th>Add 1</th>
        </tr>
        <tr>
          <th>Remove 1</th>
        </tr>
        <tr>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {cartProducts.map((product, index) => (
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
                className="bg-red-600"
                onClick={() => {
                  handleProductAdd(index);
                }}
              >
                Add 1
              </button>
            </td>
            <td>
              <button
                className="bg-red-600"
                onClick={() => {
                  handleProductRemove(index, true);
                }}
              >
                Remove 1
              </button>
            </td>
            <td>
              <button
                className="bg-red-600"
                onClick={() => {
                  handleProductRemove(index, false);
                }}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ShoppingCart;
