import { ProductDetailCard } from "@/components/ProductDetailCard";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useShoppingCartContext } from "@/context/ShoppingCartContext";
import { toast } from "react-toastify";
import { DeliveryCard } from "@/components/DeliveryCard";

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

  const deliveryCardText =
    "FREE delivery Sunday, February 5 on $25 of items shipped by Success Store";

  return (
    <div>
      <main className="w-screen flex items-center justify-center">
        <div className="w-full p-28 grid grid-cols-4">
          <ProductDetailCard
            title={product.title}
            image={product.image}
            price={product.price}
            description={product.description}
            category={product.category}
            rating={product.rating}
          />
          <DeliveryCard
            className="col-span-1"
            location="Cra. 67 con Cll. 104a"
            text={deliveryCardText}
            stock={true}
          />
        </div>
      </main>
    </div>
  );
};

export default Detail;
