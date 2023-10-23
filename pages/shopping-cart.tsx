import Head from "next/head";
import { CartSubButton } from "@/components/commons/CartSubButton";
import { CartAddButton } from "@/components/commons/CartAddButton";
import { TableDataImage } from "@/components/shopping-cart/TableDataImage";
import { TableDataRaw } from "@/components/shopping-cart/TableDataRaw";
import { TableHead } from "@/components/shopping-cart/TableHead";
import { useShoppingCartContext } from "@/context/ShoppingCartContext";

const ShoppingCart = () => {
  const { cartProducts, removeProductFromCart } = useShoppingCartContext();

  const totalProducts = cartProducts.length;

  const calculateTotal = () => {
    let total = 0;
    cartProducts.forEach((product) => {
      total += product.price * product.amount;
    });
    if (total === 0) return 1;
    return total;
  };

  const handleProductRemove = (
    productIndex: number,
    remove: boolean = true
  ) => {
    if (remove) removeProductFromCart(cartProducts[productIndex].id, false);
    else removeProductFromCart(cartProducts[productIndex].id, true);
  };

  return (
    <>
      <Head>
        <title>Shopping Cart | Success Store</title>
      </Head>
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
                  "Remove One",
                  "Add One",
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
                  <TableDataRaw text={`$${product.price}`} />
                  <TableDataRaw text={product.amount} />
                  <TableDataRaw text={`$${product.price * product.amount}`} />
                  <td className="border-y-4 py-4 px-6 text-center">
                    <CartSubButton productId={product.id} removeAll={false} />
                  </td>
                  <td className="border-y-4 py-4 px-6 text-center">
                    <CartAddButton product={product} />
                  </td>
                  <td className="border-y-4 border-r-2 py-4 px-6 text-center">
                    <CartSubButton productId={product.id} removeAll={true} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {cartProducts.length ? (
            <span className="m-5 text-2xl font-semibold">{`Total: $${calculateTotal()}`}</span>
          ) : null}
        </div>
      </main>
    </>
  );
};

export default ShoppingCart;
