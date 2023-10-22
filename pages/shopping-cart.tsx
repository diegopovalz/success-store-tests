import { CartDashButton } from "@/components/CartDashButton";
import { CartPlusButton } from "@/components/CartPlusButton";
import { DeleteButton } from "@/components/DeleteButton";
import { TableDataImage } from "@/components/TableDataImage";
import { TableDataRaw } from "@/components/TableDataRaw";
import { TableHead } from "@/components/TableHead";
import { useShoppingCartContext } from "@/context/ShoppingCartContext";
import { BsFillCartPlusFill, BsFillCartDashFill } from "react-icons/bs";
import { MdDelete } from "react-icons/md";

const ShoppingCart = () => {
  const { cartProducts, addProductToCart, removeProductFromCart } =
    useShoppingCartContext();

  const totalProducts = cartProducts.length;

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
    <main className="w-screen flex flex-col items-center">
      <div className="w-full flex items-center gap-x-2 px-40">
        <h1 className="flex text-3xl font-semibold mt-8">Cart</h1>
        <span className="mt-8 text-2xl ">{`(${totalProducts} Items)`}</span>
      </div>
      <table className="w-3/4 mt-8 mb-16 border-collapse">
        <TableHead
          headers={
            new Set<string>([
              "Item",
              "Price",
              "Quantity",
              "Total",
              "Remove 1",
              "Add 1",
              "Delete All",
            ])
          }
        />
        <tbody>
          {cartProducts.map((product, index) => (
            <tr key={product.id}>
              <TableDataImage
                imageSource={product.image}
                text={product.title}
              />
              <TableDataRaw text={product.price} />
              <TableDataRaw text={product.amount} />
              <TableDataRaw text={product.price * product.amount} />
              <td className="border-y-4 py-4 px-6">
                <CartDashButton
                  onClick={() => {
                    handleProductRemove(index, true);
                  }}
                />
              </td>
              <td className="border-y-4 py-4 px-6">
                <CartPlusButton
                  onClick={() => {
                    handleProductAdd(index);
                  }}
                />
              </td>

              <td className="border-y-4 border-r-2 py-4 px-6">
                <DeleteButton
                  onClick={() => {
                    handleProductRemove(index, false);
                  }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default ShoppingCart;
