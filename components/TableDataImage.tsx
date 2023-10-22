import Image from "next/image";

interface TableDataImageProps {
  imageSource: string;
  text: string;
}

const TableDataImage = ({ imageSource, text }: TableDataImageProps) => {
  return (
    <td className="flex flex-col">
      <Image src={imageSource} alt="Product image" width={100} height={100} />
      <span>{text}</span>
    </td>
  );
};

export { TableDataImage };
