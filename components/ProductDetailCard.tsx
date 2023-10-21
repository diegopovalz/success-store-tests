import Image from "next/image";

interface ProductDetailCardProps extends Omit<Product, "id"> {}

const ProductDetailCard = ({
  title,
  price,
  description,
  category,
  image: imageSource,
  rating,
}: ProductDetailCardProps) => {
  return (
    <div className="flex flex-col">
      <Image
        src={imageSource}
        alt={title + " image"}
        width={247}
        height={328}
      />
      <div className="flex">
        <span>{title}</span>
        <span>{category}</span>
        <p>{description}</p>
        <ul className="flex flex-col">
          <li>{rating.rate}</li>
          <li>{rating.count}</li>
        </ul>
        <span>{price}</span>
      </div>
    </div>
  );
};

export { ProductDetailCard };
