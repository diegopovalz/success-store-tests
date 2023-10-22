import Image from "next/image";
import { ProductCard } from "@/components/ProductCard";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import Link from "next/link";
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
    <div>
      <main className="flex flex-col">
        {searchFilter === "" ? (
          <>
            <section className="h-80">
              <Image src="" alt="Landing image"></Image>
            </section>
            <HomeItemsSection title="Explore products">
              {filteredProducts.map((product: Product) => {
                return (
                  <ProductCard
                    key={`product-${product.id}`}
                    id={product.id}
                    title={product.title}
                    price={product.price}
                    imageSource={product.image}
                  />
                );
              })}
            </HomeItemsSection>
          </>
        ) : (
          <HomeItemsSection title="Search results">
            {filteredProducts.map((product: Product) => {
              return (
                <ProductCard
                  key={`product-${product.id}`}
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  imageSource={product.image}
                />
              );
            })}
          </HomeItemsSection>
        )}
        <section>
          <h2>Explore categories</h2>
          <div></div>
        </section>
        <Link className="bg-red-600" href="/shopping-cart">
          carrito
        </Link>
      </main>
    </div>
  );
};

export default Home;
