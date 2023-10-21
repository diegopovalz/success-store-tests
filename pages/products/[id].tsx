import { ProductDetailCard } from "@/components/ProductDetailCard";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Detail = () => {
  const router = useRouter();
  const { id: productId } = router.query;

  const [product, setProduct] = useState<Product>({} as Product);
  const [productError, setProductError] = useState<boolean>(false);
  const [productLoading, setProductLoading] = useState<boolean>(true);

  useEffect(() => {
    const getProductData = async () => {
      if (!productId) return;
      try {
        setProductLoading(true);
        const response = await fetch(
          `https://fakestoreapi.com/products/${productId}`
        );
        const data = await response.json();
        setProduct(data);
        setProductLoading(false);
      } catch (error) {
        setProductError(true);
      }
    };
    getProductData();
  }, [productId]);

  if (productError) return <p>An error has occured.</p>;
  if (productLoading) return <p>Loading...</p>;

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
