import { CartSubButton } from "@/components/CartSubButton";
import { CartAddButton } from "@/components/CartAddButton";
import { DeleteButton } from "@/components/DeleteButton";
import { TableDataImage } from "@/components/TableDataImage";
import { TableDataRaw } from "@/components/TableDataRaw";
import { TableHead } from "@/components/TableHead";
import { useShoppingCartContext } from "@/context/ShoppingCartContext";

const ShoppingCart = () => {
  const { cartProducts, addProductToCart, removeProductFromCart } =
    useShoppingCartContext();

  const totalProducts = cartProducts.length;

  const calculateTotal = () => {
    let total = 0;
    cartProducts.forEach((product) => {
      total += product.price * product.amount;
    });
    if (total === 0) return 1;
    return total;
  };

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
      <div className="w-full mt-8 mb-16 flex flex-col items-center">
        <table className="w-3/4 border-collapse">
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
                <td className="border-y-4 py-4 px-6 mx-auto">
                  <CartSubButton
                    onClick={() => {
                      handleProductRemove(index, true);
                    }}
                  />
                </td>
                <td className="border-y-4 py-4 px-6 mx-auto">
                  <CartAddButton product={product} />
                </td>
                <td className="border-y-4 border-r-2 py-4 px-6 mx-auto">
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
        {cartProducts.length ? (
          <span className="m-5 text-2xl font-medium">{`Total: $${calculateTotal()}`}</span>
        ) : null}
      </div>
    </main>
  );
};

export default ShoppingCart;
