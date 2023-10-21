import Image from "next/image";
import { ProductCard } from "@/components/ProductCard";
import { NextPage } from "next";
import { useState } from "react";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

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
      <header className="h-20 flex space-x-3 bg-layout-blue">
        <div className="w-1/6 justify-center items-center">
          <Image
            src="/mundoexito.svg"
            alt="Mundoexito Logo"
            width={99}
            height={39}
          />
        </div>
        <div className="w-2/6">
          <div>
            <label>Input what you want to find</label>
            <input placeholder="Search categories"></input>
          </div>
          <ul>
            <li>
              <a>Electronics</a>
            </li>
            <li>
              <a>Jewelery</a>
            </li>
            <li>
              <a>Men&apos;s clothing</a>
            </li>
            <li>
              <a>Women&apos;s clothing</a>
            </li>
          </ul>
          <button>
            <svg>Lupa</svg>
          </button>
        </div>
        <div className="w-3/6 h-full flex items-center">
          <nav className="w-full flex">
            <ul className="w-full flex justify-around">
              <li>
                <a>About us</a>
              </li>
              <li>
                <a>Contact us</a>
              </li>
              <li>
                <a>My account</a>
              </li>
              <li>
                <a>My account</a>
              </li>
              <li>
                <a>
                  Shopping cart
                  <i></i>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
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
      <footer className="flex flex-col bg-layout-blue">
        <section className="grid grid-cols-5 debug">
          <div>
            <Image
              src="/mundoexito.svg"
              alt="Mundoexito Logo"
              width={118}
              height={56}
            />
            <p>Find everything for you and your home. Online shopping!</p>
            <ul>
              <li>
                <svg>Facebook</svg>
              </li>
              <li>
                <svg>X</svg>
              </li>
              <li>
                <svg>Instagram</svg>
              </li>
              <li>
                <svg>LinkedIn</svg>
              </li>
              <li>
                <svg>Youtube</svg>
              </li>
            </ul>
          </div>
          <div>
            <h3>Product</h3>
            <ul>
              <li>
                <a>Features</a>
              </li>
              <li>
                <a>Pricing</a>
              </li>
              <li>
                <a>Case studies</a>
              </li>
              <li>
                <a>Reviews</a>
              </li>
              <li>
                <a>Updates</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>Company</h3>
            <ul>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Contact us</a>
              </li>
              <li>
                <a>Careers</a>
              </li>
              <li>
                <a>Culture</a>
              </li>
              <li>
                <a>Blog</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>Support</h3>
            <ul>
              <li>
                <a>Getting started</a>
              </li>
              <li>
                <a>Help center</a>
              </li>
              <li>
                <a>Server status</a>
              </li>
              <li>
                <a>Report a bug</a>
              </li>
              <li>
                <a>Chat support</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>Downloads</h3>
            <ul>
              <li>
                <a>iOS</a>
              </li>
              <li>
                <a>Android</a>
              </li>
              <li>
                <a>Mac</a>
              </li>
              <li>
                <a>Windows</a>
              </li>
              <li>
                <a>Chrome</a>
              </li>
            </ul>
          </div>
        </section>
        <section>
          <span>Copyright 2023 Juan Zora Dev</span>
        </section>
      </footer>
    </div>
  );
};

export default Home;
