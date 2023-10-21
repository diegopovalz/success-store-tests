import Image from "next/image";
import { ProductCard } from "@/components/ProductCard";
import { NextPage } from "next";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [productsError, setProductsError] = useState<boolean>(false);
  const [productsLoading, setProductsLoading] = useState<boolean>(true);

  useEffect(() => {
    const getProductsData = async () => {
      try {
        setProductsLoading(true);
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setProductsError(true);
      } finally {
        setProductsLoading(false);
      }
    };
    getProductsData();
  }, []);

  if (productsError) return <p>An error has occured.</p>;
  if (productsLoading) return <p>Loading...</p>;

  return (
    <div>
      <main className="flex flex-col">
        <section className="h-80">
          <Image src="" alt="Landing image"></Image>
        </section>
        <section>
          <h2>Explore products</h2>
          <div className="grid grid-cols-4">
            {products.map((product: Product) => {
              return (
                <ProductCard
                  key={product.id}
                  title={product.title}
                  price={product.price}
                  imageSource={product.image}
                />
              );
            })}
          </div>
        </section>
        <section>
          <h2>Explore categories</h2>
          <div></div>
        </section>
      </main>
    </div>
  );
};

export default Home;
