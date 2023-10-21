import Image from "next/image";

interface ProductCardProps {
  title: string;
  price: number;
  imageSource: string;
}

const ProductCard = ({ title, price, imageSource }: ProductCardProps) => {
  return (
    <div className="h-72 w-40 flex flex-col bg-neutral-200">
      <Image
        alt={title + " image"}
        src={imageSource}
        width={160}
        height={224}
      />
      <div className="flex flex-col items-center">
        <span>{title}</span>
        <span>{price}</span>
      </div>
    </div>
  );
};

export { ProductCard };
