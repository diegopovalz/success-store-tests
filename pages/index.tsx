import Image from "next/image";
import { ProductCard } from "@/components/ProductCard";
import { NextPage } from "next";
import useSWR from "swr";
import { fetcher } from "@/utils/constants";

const Home: NextPage = () => {
  const {
    data: products,
    error,
    isLoading,
  } = useSWR("https://fakestoreapi.com/products", fetcher);

  if (error) return <p>An error has occured.</p>;
  if (isLoading) return <p>Loading...</p>;

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
