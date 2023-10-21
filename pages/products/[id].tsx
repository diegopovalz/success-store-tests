import { ProductDetailCard } from "@/components/ProductDetailCard";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useShoppingCartContext } from "@/context/ShoppingCartContext";
import { toast } from "react-toastify";

const Detail = () => {
  const { addProductToCart } = useShoppingCartContext();

  const router = useRouter();
  const { id: productId } = router.query;

  const [product, setProduct] = useState<Product>({} as Product);
  const [productError, setProductError] = useState<boolean>(false);
  const [productLoading, setProductLoading] = useState<boolean>(true);

  const handleAddProductClick = () => {
    addProductToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      amount: 1,
    });
    toast.success(`${product.title} added to cart!`);
  };

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
      } catch (error) {
        setProductError(true);
      } finally {
        setProductLoading(false);
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
        <button className="bg-red-600" onClick={handleAddProductClick}>
          Add to cart
        </button>
        <div></div>
      </section>
    </div>
  );
};

export default Detail;
