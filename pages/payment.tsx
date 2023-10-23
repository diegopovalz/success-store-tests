import { FormRow } from "@/components/payment/FormRow";
import { useShoppingCartContext } from "@/context/ShoppingCartContext";
import { toast } from "react-toastify";

const Payment = () => {
  const { cartProducts } = useShoppingCartContext();

  const calculateTotal = () => {
    let total = 0;
    cartProducts.forEach((product) => {
      total += product.price * product.amount;
    });
    if (total === 0) return 1;
    return total;
  };

  const data = [
    { text: "name", type: "text" },
    { text: "address", type: "text" },
    { text: "credit_card", type: "number" },
    { text: "city", type: "text" },
    { text: "state", type: "text" },
    { text: "zip_code", type: "number" },
    { text: "phone", type: "tel" },
  ];

  return (
    <main className="w-full flex flex-col items-center my-12 gap-y-8">
      <h1 className="text-2xl font-bold">Payment Form</h1>
      <form className="flex flex-col gap-y-4 items-center">
        {data.map((item) => {
          return <FormRow key={item.text} name={item.text} type={item.type} />;
        })}
        <p className="font-semibold text-lg">Total: ${calculateTotal()}</p>
        <button
          onClick={() => {
            toast.success("Payment confirmed!");
          }}
          type="submit"
          className="bg-cyan-600 text-white font-semibold rounded-md py-2 px-4"
        >
          Confirm payment
        </button>
      </form>
    </main>
  );
};

export default Payment;
