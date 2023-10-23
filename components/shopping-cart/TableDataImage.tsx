import Image from "next/image";

interface TableDataImageProps {
  imageSource: string;
  text: string;
}

const TableDataImage = ({ imageSource, text }: TableDataImageProps) => {
  return (
    <td className="flex flex-col items-center border-y-2 border-l-2 p-2">
      <Image src={imageSource} alt="Product image" width={100} height={100} />
      <p className="text-center">{text}</p>
    </td>
  );
};

export { TableDataImage };
