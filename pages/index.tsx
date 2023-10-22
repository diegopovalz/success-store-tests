import Image from "next/image";
import { ProductCard } from "@/components/ProductCard";
import { useEffect, useState } from "react";
import { useSearchFilterContext } from "@/context/SearchFilterContext";
import { HomeItemsSection } from "@/components/HomeItemsSection";

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [productsError, setProductsError] = useState<boolean>(false);
  const [productsLoading, setProductsLoading] = useState<boolean>(true);
  const { searchFilter } = useSearchFilterContext();

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

  const filteredProducts =
    searchFilter === ""
      ? products
      : products.filter((product) => {
          return product.title
            .toLowerCase()
            .includes(searchFilter.toLowerCase());
        });

  if (filteredProducts.length === 0) return <p>No products found</p>;
  return (
    <main className="w-screen flex flex-col">
      {searchFilter === "" ? (
        <>
          <section>
            <Image
              src="/images/cyber-monday-shopping.jpg"
              alt="Cyber monday landing image"
              width={2000}
              height={1000}
            ></Image>
          </section>
          <HomeItemsSection title="Explore products">
            <div className="grid grid-cols-4 auto-rows-auto">
              {filteredProducts.map((product: Product) => {
                return (
                  <ProductCard
                    className="col-span-1"
                    key={`product-${product.id}`}
                    product={product}
                  />
                );
              })}
            </div>
          </HomeItemsSection>
        </>
      ) : (
        <HomeItemsSection title="Search results">
          <div className="grid grid-cols-4 auto-rows-auto">
            {filteredProducts.map((product: Product) => {
              return (
                <ProductCard
                  className="col-span-1"
                  key={`product-${product.id}`}
                  product={product}
                />
              );
            })}
          </div>
        </HomeItemsSection>
      )}
      <section>
        <h2>Explore categories</h2>
        <div></div>
      </section>
    </main>
  );
};

export default Home;
