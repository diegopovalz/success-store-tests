import Image from "next/image";
import { StarRating } from "./StarRating";
import { CartAddButton } from "./CartAddButton";

interface ProductDetailCardProps {
  className?: string;
  product: DetailProduct;
}

const ProductDetailCard = ({ className, product }: ProductDetailCardProps) => {
  let classes = "flex";
  if (className) classes += ` ${className}`;

  return (
    <div className={classes}>
      <Image
        src={product.image}
        alt={product.title + " image"}
        width={250}
        height={250}
      />
      <div className="flex flex-col p-8 gap-y-3">
        <span className="text-2xl font-semibold">{product.title}</span>
        <div className="flex gap-x-1">
          <span className="font-semibold">Brand: </span>
          <span className="text-cyan-600">{product.category}</span>
        </div>
        <p>{product.description}</p>
        <StarRating rating={product.rating} />
        <span className="text-3xl font-semibold">{`$${product.price}`}</span>
        <CartAddButton product={product} />
      </div>
    </div>
  );
};

export { ProductDetailCard };
