import { LocationText } from "./LocationText";
import { PrimaryButton } from "./PrimaryButtonBlue";
import { MdLocalShipping, MdPayment } from "react-icons/md";

interface DeliveryCardProps {
  className?: string;
  text: string;
  location: string;
  stock: boolean;
}

const DeliveryCard = ({
  className,
  text,
  location,
  stock,
}: DeliveryCardProps) => {
  let classes = "flex flex-col border-2 border-sky-300 p-4 gap-y-3";
  if (className) classes += ` ${className}`;

  return (
    <div className={classes}>
      <p className="font-bold">{text}</p>
      <LocationText location={location} />
      {stock ? (
        <p className="text-green-700">In Stock.</p>
      ) : (
        <p className="text-red-600">No Stock.</p>
      )}
      <PrimaryButton
        className="w-full"
        text="Contact supplier"
        backgroundColor="cyan-600"
      />
      <PrimaryButton
        className="w-full"
        text="Chat now"
        backgroundColor="white"
      />
      <span className="font-semibold text-lg">Purchase details</span>
      <div className="flex gap-x-1 items-center px-2">
        <MdLocalShipping color="gray" size={32} />
        <span className="text-cyan-600">Shipping</span>
      </div>
      <div className="flex gap-x-1 items-center px-2">
        <MdPayment color="gray" size={32} />
        <span className="text-cyan-600">Payments</span>
      </div>
    </div>
  );
};

export { DeliveryCard };
