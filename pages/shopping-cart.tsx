import { TableDataImage } from "@/components/TableDataImage";
import { TableDataRaw } from "@/components/TableDataRaw";
import { TableHead } from "@/components/TableHead";
import { useShoppingCartContext } from "@/context/ShoppingCartContext";

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
      <TableHead
        headers={
          new Set<string>([
            "Item",
            "Price",
            "Quantity",
            "Total",
            "Add 1",
            "Remove 1",
            "Delete All",
          ])
        }
      />
      <tbody>
        {cartProducts.map((product, index) => (
          <tr key={product.id}>
            <TableDataImage imageSource={product.image} text={product.title} />
            <TableDataRaw text={product.price} />
            <TableDataRaw text={product.amount} />
            <TableDataRaw text={product.price * product.amount} />
            <td>
              Add 1
              <button
                className="bg-red-600"
                onClick={() => {
                  handleProductAdd(index);
                }}
              ></button>
            </td>
            <td>
              Remove 1
              <button
                className="bg-red-600"
                onClick={() => {
                  handleProductRemove(index, true);
                }}
              ></button>
            </td>
            <td>
              Delete All
              <button
                className="bg-red-600"
                onClick={() => {
                  handleProductRemove(index, false);
                }}
              ></button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ShoppingCart;
