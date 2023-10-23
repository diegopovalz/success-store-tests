import { IoLocationSharp } from "react-icons/io5";

interface LocationTextProps {
  location: string;
}

const LocationText = ({ location }: LocationTextProps) => {
  return (
    <div className="flex gap-x-1 items-center px-2">
      <IoLocationSharp color="gray" size={32} />
      <p>{`Deliver to ${location}`}</p>
    </div>
  );
};

export { LocationText };
