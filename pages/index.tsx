import Image from "next/image";
import Head from "next/head";
import { ProductCard } from "@/components/index/ProductCard";
import { useEffect, useState } from "react";
import { useSearchFilterContext } from "@/context/SearchFilterContext";
import { HomeItemsSection } from "@/components/index/HomeItemsSection";

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
    <>
      <Head>
        <title>Index | Success Store</title>
      </Head>
      <main className="w-screen flex flex-col mb-8">
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
              <div className="grid grid-cols-4 gap-y-8">
                {filteredProducts.map((product: Product) => {
                  return (
                    <ProductCard
                      className="col-span-1 w-4/5 h-80"
                      key={`product-${product.id}`}
                      product={product}
                    />
                  );
                })}
              </div>
            </HomeItemsSection>
          </>
        ) : (
          <HomeItemsSection title={`Search results for "${searchFilter}"`}>
            <div className="grid grid-cols-4 gap-y-8">
              {filteredProducts.map((product: Product) => {
                return (
                  <ProductCard
                    className="col-span-1 w-4/5 h-80"
                    key={`product-${product.id}`}
                    product={product}
                  />
                );
              })}
            </div>
          </HomeItemsSection>
        )}
      </main>
    </>
  );
};

export default Home;
