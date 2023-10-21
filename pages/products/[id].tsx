import { ProductDetailCard } from "@/components/ProductDetailCard";
import { useRouter } from "next/router";
import useSWR from "swr";
import { fetcher } from "@/utils/constants";

const Detail = () => {
  const router = useRouter();
  const { id: productId } = router.query;
  const {
    data: product,
    error,
    isLoading,
  } = useSWR(`https://fakestoreapi.com/products/${productId}`, fetcher);

  if (error) return <p>An error has occured.</p>;
  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <section>
        <ProductDetailCard
          title={product.title}
          image={product.image}
          price={product.price}
          description={product.description}
          category={product.category}
          rating={product.rating}
        />
        <div></div>
      </section>
    </div>
  );
};

export default Detail;
